// login.js
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    // Validate CIIT email domain
    if (!email.endsWith('@ciit.edu.ph')) {
      alert('Please use a valid CIIT email address (e.g., example@ciit.edu.ph).');
      return;
    }

    // Simulate a login request (replace with actual API call)
    if (password === 'password') { // Replace with actual password validation
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = 'index.html'; // Redirect to the main enrollment page
    } else {
      alert('Invalid email or password');
    }
  });
});