document.addEventListener("DOMContentLoaded", () => {
  // form validation
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (form.checkValidity()) {
        alert("✅ Thank you! Your form has been submitted successfully.");
        form.reset();
      } else {
        alert("⚠ Please fill in all required fields correctly.");
      }
    });
  });

  // simple fade-in animation trigger
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.2 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));
});
// ===== Scroll to Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});