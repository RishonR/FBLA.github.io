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

// Other existing functions and event listeners
function submitApplication() {
    var jobTitle = document.querySelector('input[name="jobTitle"]:checked');
    var fullName = document.getElementById('fullName').value;

    if (jobTitle && fullName) {
        // Optionally, you can perform other actions here
    } else {
        showErrorPopup();
        return;
    }

    showModal();
    hideErrorPopup();
}
function submitApplication() {
    // Reset error message
    document.getElementById("errorPopup").style.display = "none";

    // Get form values
    var jobTitle = document.querySelector('input[name="jobTitle"]:checked');
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;

    // Check if all fields are filled
    if (jobTitle && fullName && email) {
        // Display modal (you can customize this part based on your requirements)
        document.getElementById("myModal").style.display = "block";
    } else {
        // Display error message
        document.getElementById("errorPopup").style.display = "block";
    }
}

function hideModal() {
    // Hide modal
    document.getElementById("myModal").style.display = "none";
}
// Other existing functions and event listeners
