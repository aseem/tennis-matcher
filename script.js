const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

const nav_players = document.getElementById("nav-players");
const nav_round1 = document.getElementById("nav-round1");
const nav_round2 = document.getElementById("nav-round2");
const nav_round3 = document.getElementById("nav-round3");

const player_table = document.getElementById("player-table");

var player_scores = [
  { player: "Aseem", score: 0 },
  { player: "Diana", score: 0 },
  { player: "Chris", score: 0 },
  { player: "Romie", score: 0 },
  { player: "Pamela", score: 0 },
  { player: "Rachel", score: 0 },
  { player: "Deb", score: 0 },
  { player: "Stu", score: 0 },
  { player: "Matt", score: 0 },
  { player: "John", score: 0 },
  { player: "Ron", score: 0 },
  { player: "Elisa", score: 0 },
  { player: "Laura", score: 0 },
  { player: "MP", score: 0 },
  { player: "Nate", score: 0 },
];

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
  player_table.innerHTML = "";

  var header_row = document.createElement("tr");
  var h1 = document.createElement("th");
  var h2 = document.createElement("th");
  h1.textContent = "Player";
  h2.textContent = "Score";
  header_row.appendChild(h1);
  header_row.appendChild(h2);
  player_table.appendChild(header_row);

  for (var i = 0; i < player_scores.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.textContent = player_scores[i]["player"];
    var cell2 = document.createElement("td");
    cell2.textContent = player_scores[i]["score"];

    row.appendChild(cell1);
    row.appendChild(cell2);
    player_table.appendChild(row);
  }

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
