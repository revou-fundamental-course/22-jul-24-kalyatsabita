// script.js
// Auto slide banner
const bannerSlide = document.querySelector('.banner-slide');
const bannerImages = document.querySelectorAll('.banner-slide img');

let currentImage = 0;

setInterval(() => {
  bannerImages[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % bannerImages.length;
  bannerImages[currentImage].classList.add('active');
}, 3000);

// Form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const destinationInput = document.getElementById('destination');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const destinationValue = destinationInput.value.trim();

  if (nameValue === '') {
    alert('Nama harus diisi');
    return;
  }

  if (emailValue === '') {
    alert('Email harus diisi');
    return;
  }

  if (destinationValue === '') {
    alert('Tujuan perjalanan harus diisi');
    return;
  }

  // Kirim data ke server atau proses selanjutnya
  console.log('Data berhasil dikirim');
});