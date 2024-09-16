// Select DOM elements
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Function to switch to the Sign Up form
function switchToSignup() {
    loginForm.style.transform = "translateX(-50%)";
    signupForm.style.transform = "translateX(0%)";
    loginText.style.color = "#000";
    signupText.style.color = "#fff";
}

// Function to switch to the Login form
function switchToLogin() {
    loginForm.style.transform = "translateX(0%)";
    signupForm.style.transform = "translateX(50%)";
    loginText.style.color = "#fff";
    signupText.style.color = "#000";
}

// Event listeners for form switching
signupBtn.addEventListener('click', switchToSignup);
loginBtn.addEventListener('click', switchToLogin);

// Handle the sign-up link click
signupLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    switchToSignup(); // Switch to sign-up form
});
