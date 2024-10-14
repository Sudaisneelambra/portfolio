const menuIcon = document.getElementById('iconss');
const close = document.getElementById('close');
const sidenav = document.querySelector('.sidenav');
const sidenavLinks = document.querySelectorAll('.sidenav a');

// Function to handle resizing
const handleResize = () => {
    if (window.innerWidth > 850) {
        sidenav.classList.remove('active');
    }
};

// Event listeners
menuIcon.addEventListener('click', () => {
    sidenav.classList.toggle('active'); 
});


// Event listeners
close.addEventListener('click', () => {
    sidenav.classList.remove('active');
});

sidenavLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidenav.classList.remove('active'); // Close the sidenav
    });
});


window.addEventListener('resize', handleResize);
