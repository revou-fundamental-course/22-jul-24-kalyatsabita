document.addEventListener('DOMContentLoaded', function () {
    // Auto sliding banner functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const intervalTime = 3000; // 3 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, intervalTime);
    showSlide(currentSlide);

    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;

        if (name === '' || email === '' || destination === '') {
            e.preventDefault();
            alert('All fields are required!');
        }
    });
});
