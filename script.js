
const navToggle = document.getElementById("navToggle");
const navLink = document.getElementById("navLink");

function closeMenu() {
  navToggle.classList.remove("active");
  navLink.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Buka menu navigasi");
}

navToggle.addEventListener("click", () => {
  const isOpen = !navToggle.classList.contains("active");

  navToggle.classList.toggle("active", isOpen);
  navLink.classList.toggle("active", isOpen);

  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
  );
});

navLink.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
