document.addEventListener("DOMContentLoaded", function() {
    // Navigation logic to show/hide sections based on navigation clicks
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            const targetSectionId = this.getAttribute('href').substring(1);
            document.getElementById(targetSectionId).style.display = 'block';
        });
    });

    // Additional navigation logic to show the initial section
    document.getElementById('benefits').style.display = 'block';

    // Job description toggle functionality
    var jobButtons = document.querySelectorAll(".job-title");
    jobButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var jobInfo = this.nextElementSibling;
            if (jobInfo.style.display === "none" || jobInfo.style.display === "") {
                jobInfo.style.display = "block"; 
                this.textContent = this.textContent.replace("▶", "▼");
            } else {
                jobInfo.style.display = "none"; 
                this.textContent = this.textContent.replace("▼", "▶"); 
            }
        });
    });
});

// Form submission logic
function submitApplication() {
    // Reset error message
    document.getElementById("errorPopup").style.display = "none";

    // Get form values
    var jobTitle = document.querySelector('input[name="jobTitle"]:checked');
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;

    // Check if all fields are filled
    if (jobTitle && fullName && email) {
        // Display modal 
        document.getElementById("myModal").style.display = "block";
    } else {
        // Display error message
        document.getElementById("errorPopup").style.display = "block";
    }
}
