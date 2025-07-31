function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleDetails(trainerId) {
    const detailsDiv = document.getElementById(`details-${trainerId}`);
    if (detailsDiv.classList.contains('show')) {
        detailsDiv.classList.remove('show');
    } else {
        detailsDiv.classList.add('show');
    }
}



