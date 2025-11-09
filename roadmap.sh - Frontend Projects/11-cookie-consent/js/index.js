// Checks if consent was already given
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
});

// Accepts cookies and hides popup
document.getElementById('acceptBtn').addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookieConsent').style.display = 'none';
});

// Rejects cookies and hides popup
document.getElementById('closeBtn').addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'false');
    document.getElementById('cookieConsent').style.display = 'none';
});