document.addEventListener("DOMContentLoaded", function () {
    console.log("Tracking.js Loaded");

    function updateQueuePosition() {
        console.log("Fetching queue position...");
        // Simulate fetching queue position from backend
        setTimeout(() => {
            document.getElementById("queue-position").innerText = "5";
            document.getElementById("wait-time").innerText = "15 minutes";
        }, 1000);
    }

    updateQueuePosition();

    // Logout Functionality
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Logging out...");
            // Add Firebase logout logic here
            window.location.href = "login.html";
        });
    }
});