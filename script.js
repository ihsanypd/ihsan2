function showAlert() {
    alert("Welcome to Star Entertainment! Explore our services and unleash your talent.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert("All fields are required. Please fill out the form completely.");
    } else {
        alert("Thank you, ${name}! Your message has been sent.");
        this.reset(); // Reset form after submission
    }
});