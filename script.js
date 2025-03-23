// Toggle nav links on small screens
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Toggle dark mode
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle the icon between moon and sun
  if (body.classList.contains('dark-mode')) {
    toggleDarkMode.textContent = '☀️';
  } else {
    toggleDarkMode.textContent = '🌙';
  }
});
const form = document.querySelector('.contact-form');
const toast = document.getElementById('toast');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      showToast();
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    alert('There was an error: ' + error.message);
  });
});

function showToast() {
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
