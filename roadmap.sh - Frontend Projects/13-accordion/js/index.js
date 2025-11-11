// Select all buttons with the class 'panel-btn'
document.querySelectorAll('.panel-btn').forEach(function(button) {
    // Add click event listener to each button
    button.addEventListener('click', function() {
        // Get the target panel ID using the data-target attribute of the button
        var targetPanelId = button.getAttribute('data-target');
        var panel = document.getElementById(targetPanelId);

        // Toggle the 'hidden' class on the target panel
        panel.classList.toggle('hidden');
    });
});
