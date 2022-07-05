const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

const nav_players = document.getElementById("nav-players");
const nav_round1 = document.getElementById("nav-round1");
const nav_round2 = document.getElementById("nav-round2");
const nav_round3 = document.getElementById("nav-round3");

// Toggle nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

// Toggle players content
nav_players.addEventListener("click", () => {
  document.getElementById("main-container").innerHTML =
    document.getElementById("players-container").innerHTML;
  document.body.classList.toggle("show-nav");
});

// Toggle round content
nav_round1.addEventListener("click", () => {
  document.getElementById("main-container").innerHTML =
    document.getElementById("round1-container").innerHTML;
  document.body.classList.toggle("show-nav");
});

nav_round2.addEventListener("click", () => {
  document.getElementById("main-container").innerHTML =
    document.getElementById("round2-container").innerHTML;
  document.body.classList.toggle("show-nav");
});

nav_round3.addEventListener("click", () => {
  document.getElementById("main-container").innerHTML =
    document.getElementById("round3-container").innerHTML;
  document.body.classList.toggle("show-nav");
});
