document.addEventListener("DOMContentLoaded", function() {
    let alertButtons = document.querySelectorAll(".alertButton");
    
    alertButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let struggleName = button.parentElement.textContent.trim();
            alert("I need help with " + struggleName);
        });
    });
});