document.getElementById("hamburger").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});









// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

// Scroll smoothly to sections
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('href');
        scrollToSection(targetSection);
    });
});


    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }












document.getElementById("hamburger").addEventListener("click", function() {
    const nav = document.getElementById("navbar"); // Change this to 'navbar'
    nav.classList.toggle("active");
});









