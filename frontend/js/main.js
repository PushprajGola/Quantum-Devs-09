document.addEventListener("DOMContentLoaded", function () {
    console.log("VQMS Frontend Loaded");

    // Logout Functionality
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Logging out...");
            // Add Firebase or session logout logic here
            window.location.href = "login.html";
        });
    }

    // Placeholder for additional global functionality
});