// Function to register a new user
function register() {
    const username = document.getElementById('regUser').value;
    const password = document.getElementById('regPass').value;
    const useremail = document.getElementById('regEmail').value;

    if (username && password && useremail) {
        // Store the username, password, and email in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('email', useremail);
        alert('User registered successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to log in the user
function login() {
    const password = document.getElementById('logPass').value;
    const useremail = document.getElementById('logEmail').value;

    const storedUserEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (useremail === storedUserEmail && password === storedPassword) {
        // Store the email in session storage
        sessionStorage.setItem('loggedInUser', useremail);
        displayWelcomeMessage();
    } else {
        alert('Invalid email or password.');
    }
}

// Function to display the welcome message
function displayWelcomeMessage() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        alert('Welcome,' + loggedInUser +'!');
        
    }
}

// Check if the user is already logged in when the page loads
window.onload = function() {
    displayWelcomeMessage();
}
