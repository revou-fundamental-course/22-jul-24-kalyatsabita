document.addEventListener('DOMContentLoaded', () => {
    // Banner auto slide
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide img');
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

    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;

        if (!name || !email || !destination) {
            alert('Please fill out all fields.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });
});
