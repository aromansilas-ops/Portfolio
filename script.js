// Show a welcome message when the page loads
window.addEventListener("load", () => {
  console.log("Welcome to Aro Mansilas' Website!");
  alert("👋 Welcome to Aro Mansilas' Website!");
});

// Smooth scrolling for navigation (if same page links are used)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return; // Only run on contact.html

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("⚠️
