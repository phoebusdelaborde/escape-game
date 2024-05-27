let game = document.getElementById("game");
game.addEventListener("click", function () {
  code = prompt("Code ?", " ");
  if (code === "2121") {
    alert("Regardez la porte");
  } else {
    alert("Gros mito");
  }
});
