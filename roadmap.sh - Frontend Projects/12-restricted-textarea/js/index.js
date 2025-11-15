const textarea = document.querySelector("textarea");

textarea.addEventListener("input", ({ currentTarget: target }) => {
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    // Updates Counter
    document.getElementById('charCount').innerHTML = `${currentLength}/${maxLength}`;

    // Checks if limit is reached
    if (currentLength >= maxLength) {
        target.classList.add('limit-reached');
    } else {
        target.classList.remove('limit-reached');
    }
});