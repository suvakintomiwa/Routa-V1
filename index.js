// Smooth scroll to target section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Waitlist form handling
function handleWaitlistSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const message = document.getElementById("waitlist-message");

  if (!emailInput.value.trim()) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate submission (replace with real backend/API call later)
  message.classList.remove("hidden");
  message.textContent = "Thanks for joining! We'll be in touch soon.";
  emailInput.value = "";

  // Add subtle animation feedback
  message.style.opacity = "0";
  setTimeout(() => (message.style.opacity = "1"), 100);
}

// Whitepaper button handler
const whitepaperBtn = document.querySelector('button:nth-of-type(2)');
whitepaperBtn.addEventListener('click', () => {
  // Update this path when your whitepaper is ready
  window.open("/whitepaper.pdf", "_blank");
});

// Optional: Animate fade-ins when elements enter view
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
