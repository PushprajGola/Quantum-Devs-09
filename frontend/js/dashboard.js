document.addEventListener("DOMContentLoaded", function () {
    console.log("Dashboard.js Loaded");

    function fetchAppointments() {
        console.log("Fetching user appointments...");
        // Add logic to retrieve user appointments from Firebase or backend
    }

    function updateQueueStatus() {
        console.log("Updating live queue status...");
        // Add logic to fetch and display live queue status
    }

    function manageProfile() {
        console.log("Managing user profile...");
        // Add logic to update user profile details
    }

    // Initialize Dashboard Functions
    fetchAppointments();
    updateQueueStatus();

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