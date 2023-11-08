// JavaScript for form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // You can add more validation for name and message if needed

    // If all fields are valid, you can submit the form or take other actions here
    // For example, you can use JavaScript to send the form data to a server via AJAX.
    // You can also redirect the user to a "Thank You" page.

    // This is just a basic example to get you started with form validation.
    alert('Form submitted successfully!');
});