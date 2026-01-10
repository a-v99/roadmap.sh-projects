const languageSelect = document.getElementById("language-select");
const repoInfo = document.getElementById("repo-info");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const empty = document.getElementById("empty");
const refreshBtn = document.getElementById("refresh-btn");

const languagesUrl = 'https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json';

async function loadLanguages() {
    try {
        const response = await fetch(languagesUrl);
        const languages = await response.json();
        createLanguageDropdown(languages);
    } catch (error) {
        showError('Failed to load languages.');
    }
}

function createLanguageDropdown(languages) {
    languages.forEach(language =>{
        const option = document.createElement("option");
        option.value = language.value;
        option.textContent = language.title;
        languageSelect.appendChild(option);
    });
}

async function fetchRandomRepo() {
    const selectedLanguage = languageSelect.value;
    if (!selectedLanguage) {
        alert("Please select a language.");
        return;
    }

    showLoading();
    clearMessages();

    const apiUrl = `https://api.github.com/search/repositories?q=language:${selectedLanguage}&sort=stars`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const randomRepo = data.items[Math.floor(Math.random() * data.items.length)];
            displayRepo(randomRepo);
        } else {
            showEmpty();
        }
    } catch (error) {
        console.error(error);
        hideRepoInfo();
        showError('Failed to fetch repositories.');
    } finally {
        hideLoading();
    }
}

function displayRepo(randomRepo) {
    repoInfo.style.display = "flex";
    repoInfo.innerHTML = `
        <h2>${randomRepo.name}</h2>
        <p>${randomRepo.description || 'No description available'}</p>
        <div class="repo-info">
        <p>
          <span>★</span> ${randomRepo.stargazers_count}
        </p>
        <p>
          <span>⑂</span> ${randomRepo.forks_count}
        </p>
        <p>
          <span>⚠</span> ${randomRepo.open_issues_count}
        </p>
        <a href="${randomRepo.html_url}" target="_blank">View on GitHub</a>
        </div>
      `;
      refreshBtn.style.display = "block";
}

function showLoading() {
    hideRepoInfo();
    loading.style.display = "flex";
}

function hideLoading() {
    loading.style.display = "none";
}

function showEmpty() {
    hideRepoInfo();
    empty.style.display = "flex";
}

function hideRepoInfo() {
    repoInfo.style.display = "none";
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = "flex";
}

function clearMessages() {
    errorDiv.style.display = "none";
    empty.style.display = "none"
    repoInfo.innerHTML = "";
}

languageSelect.addEventListener("change", fetchRandomRepo);
refreshBtn.addEventListener("click", fetchRandomRepo);

loadLanguages();