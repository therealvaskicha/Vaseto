const logo = document.querySelector('.logo');
const invertLogo = document.querySelector('.invert-logo');

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