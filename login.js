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

    // Validate password (must not be blank)
    if (password.trim() === '') {
      alert('Password cannot be blank.');
      return;
    }

    // Simulate a login request (replace with actual API call)
    alert('Login successful! Redirecting to dashboard...');

    // Store the email in localStorage
    localStorage.setItem('userEmail', email);

    // Redirect to the main enrollment page
    window.location.href = 'index.html';
  });
});