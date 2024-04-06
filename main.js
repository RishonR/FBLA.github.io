document.addEventListener("DOMContentLoaded", function() {
    // Navigation logic to show/hide sections based on navigation clicks
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });

            // Play sound
            const audio = new Audio('Wind-Shoowsh-Fast-www.fesliyanstudios.com.mp3');
            audio.play();

            // Show the target section with a fade-in effect
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            targetSection.style.opacity = '0';
            targetSection.style.display = 'block';
            setTimeout(() => {
                targetSection.style.opacity = '1';
            }, 100); // Adjust the delay if needed
        });
    });

    // Additional navigation logic to show the initial section
    document.getElementById('benefits').style.display = 'block';

    // Rest of your JavaScript code...
});

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

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var jobTitles = document.querySelectorAll('.job-title');
    jobTitles.forEach(function(title) {
        var jobTitleText = title.textContent.toLowerCase();
        var jobContainer = title.closest('.job-container');
        if (jobTitleText.includes(searchTerm)) {
            jobContainer.style.display = 'block';
        } else {
            jobContainer.style.display = 'none';
        }
    });
});

// Form submission logic
function submitApplication() {
    // Reset error message and success message
    document.getElementById("errorPopup").style.display = "none";
    document.getElementById("submitSuccess").style.display = "none";

    // Get form values
    var jobTitle = document.getElementById("jobTitle").value;
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;

    // Check if all fields are filled
    if (jobTitle && fullName && email) {
        // Display success message
        document.getElementById("submitSuccess").style.display = "block";
    } else {
        // Display error message
        document.getElementById("errorPopup").style.display = "block";
    }
}

// Salary search functionality
document.getElementById("minSalary").addEventListener("input", searchJobs);
document.getElementById("maxSalary").addEventListener("input", searchJobs);

function searchJobs() {
    var inputLocation = document.getElementById("location").value.toLowerCase();
    var inputTitle = document.getElementById("jobTitle").value.toLowerCase();
    var minSalary = parseFloat(document.getElementById("minSalary").value);
    var maxSalary = parseFloat(document.getElementById("maxSalary").value);

    var jobs = document.getElementsByClassName("job");

    for (var i = 0; i < jobs.length; i++) {
        var job = jobs[i];
        var jobLocation = job.dataset.location.toLowerCase();
        var jobTitle = job.dataset.title.toLowerCase();
        var salaryRange = job.dataset.salary.split("-").map(parseFloat);

        var locationMatch = jobLocation.includes(inputLocation);
        var titleMatch = jobTitle.includes(inputTitle);
        var salaryMatch = false;

        if (isNaN(salaryRange[1])) {
            // If only one salary value is provided, compare it with min and max salary input
            salaryMatch = isNaN(minSalary) || isNaN(maxSalary) || (minSalary <= salaryRange[0] && maxSalary >= salaryRange[0]);
        } else {
            // If a salary range is provided, calculate the average and compare it with min and max salary input
            var averageSalary = (salaryRange[0] + salaryRange[1]) / 2;
            salaryMatch = isNaN(minSalary) || isNaN(maxSalary) || (minSalary <= averageSalary && maxSalary >= averageSalary);
        }

        if (locationMatch && titleMatch && salaryMatch) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    }
}
