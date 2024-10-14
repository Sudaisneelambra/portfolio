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


function sendMessage() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const myphone= 919747491562

    const whatsappMessage = `
        Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Subject: ${subject}
        Message: ${message}
    `;

    const whatsappUrl = `https://wa.me/${myphone}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
}
