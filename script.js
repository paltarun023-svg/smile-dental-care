// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Simple form handler (frontend only – shows confirmation)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return false;
  }

  // In a real site this would send data to a backend / WhatsApp / email service
  alert(
    `Thank you, ${name}!\n\nWe have received your request. Our team will call you shortly on ${phone}.\n\nFor faster assistance, please call us at +91 98915 85545.`
  );

  form.reset();
  return false;
}
