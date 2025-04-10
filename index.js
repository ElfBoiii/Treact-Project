const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobileLinks");

function openMenu() {
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

navToggle.addEventListener("click", function () {
  document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
});

// Close menu when a link is clicked (optional)
document.querySelectorAll(".nav_mobile-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});