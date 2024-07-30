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
