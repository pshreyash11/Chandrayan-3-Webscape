document.addEventListener("DOMContentLoaded", function() {
    const teamSection = document.getElementById("team");
    const teamToggle = document.querySelector("nav a[href='#team']");

    teamToggle.addEventListener("click", function(event) {
        event.preventDefault();
        teamSection.classList.toggle("show");
    });
});