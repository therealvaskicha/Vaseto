const logo = document.querySelector('.logo');
const invertLogo = document.querySelector('.invert-logo');
const cvlink = document.getElementById('cv-link');
const projectsLink = document.getElementById('projects-link');

cvlink.addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1Mv4ph6xivhd_bN0gRtxZF7wGBCOsAsiF/preview', '_blank');
});

projectsLink.addEventListener('click', () => {
    const modal = document.getElementById('tba-modal');
    modal.classList.add('show');
});

const tbaOkBtn = document.getElementById('tba-ok-btn');
if (tbaOkBtn) {
    tbaOkBtn.addEventListener('click', () => {
        const modal = document.getElementById('tba-modal');
        modal.classList.remove('show');
    });
}

// Close modal when clicking outside the blob
document.addEventListener('click', (e) => {
    const modal = document.getElementById('tba-modal');
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

function initDarkMode() {
    const lightsOn = document.querySelector('.lights-on');
    const lightsOff = document.querySelector('.lights-off');
    
    // Check for saved user preference in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    // Toggle dark mode on click
    lightsOn.addEventListener('click', enableDarkMode);
    lightsOff.addEventListener('click', disableDarkMode);
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelector('.lights-on').style.display = 'none';
    document.querySelector('.lights-off').style.display = 'inline';
    localStorage.setItem('darkMode', 'enabled');
    logo.style.display = 'none';
    invertLogo.style.display = 'inline';
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.querySelector('.lights-on').style.display = 'inline';
    document.querySelector('.lights-off').style.display = 'none';
    localStorage.setItem('darkMode', 'disabled');
    logo.style.display = 'inline';
    invertLogo.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', initDarkMode);