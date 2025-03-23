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
// ==== Carousel Functionality ====

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const navButtons = document.querySelectorAll('.carousel-nav button');

let index = 0;
const itemsToShow = 5;
const itemWidth = 120; // item width + gap

// Auto-scroll every 3 seconds
let autoScroll = setInterval(() => {
  moveCarousel(1);
}, 3000);

// Move carousel in the specified direction (1 = right, -1 = left)
function moveCarousel(direction) {
  index += direction;

  // Loop around
  if (index > items.length - itemsToShow) index = 0;
  if (index < 0) index = items.length - itemsToShow;

  updateCarousel();
}

// Update carousel position
function updateCarousel() {
  const newTransform = -index * itemWidth;
  track.style.transform = `translateX(${newTransform}px)`;

  // Update nav button active state
  navButtons.forEach(btn => btn.classList.remove('active'));
  if (navButtons[index]) {
    navButtons[index].classList.add('active');
  }
}

// Manual navigation
navButtons.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    index = btnIndex;
    updateCarousel();

    // Reset auto-scroll interval
    clearInterval(autoScroll);
    autoScroll = setInterval(() => {
      moveCarousel(1);
    }, 3000);
  });
});

// Optional: Pause on hover
track.addEventListener('mouseover', () => clearInterval(autoScroll));
track.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    moveCarousel(1);
  }, 3000);
});

