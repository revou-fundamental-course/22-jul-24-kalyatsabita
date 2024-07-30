document.addEventListener('DOMContentLoaded', () => {
    // Banner auto slide
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;
    
    if(name === '' || email === '' || destination === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully.');
    }
});

// Add JavaScript for auto sliding banner
