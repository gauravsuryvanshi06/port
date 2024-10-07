// Theme Toggling
const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');
const readingModeBtn = document.getElementById('reading-mode');
const body = document.body;

// Function to set theme
function setTheme(theme) {
  body.setAttribute('data-theme', theme);
}

// Event Listeners for Theme Buttons
lightModeBtn.addEventListener('click', () => setTheme('light'));
darkModeBtn.addEventListener('click', () => setTheme('dark'));
readingModeBtn.addEventListener('click', () => setTheme('reading'));

// Contact Form Submission (Basic Example)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic Validation
  if(name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Here you can add code to send the form data to your server
  // For this example, we'll just display an alert
  alert('Thank you for your message!');

  // Reset the form
  contactForm.reset();
});

// Gallery Modal (Optional Enhancement)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    openModal(imgSrc);
  });
});

function openModal(src) {
  // Create Modal Elements
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Portfolio Image';

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;';

  // Append Elements
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(img);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Show Modal
  modal.style.display = 'block';

  // Close Modal on Click
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });

  // Close Modal on Outside Click
  window.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.remove();
    }
  });
}
