function showSection(sectionId) {
    // Select all sections
    const sections = document.querySelectorAll("body > div");

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initial setup to show the about section by default
window.onload = function() {
    showSection('about');
};
