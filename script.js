const editor = document.getElementById("panel-der");
let selected = null, offsetX = 0, offsetY = 0;

document.querySelectorAll(".rect").forEach(circle => {
  circle.addEventListener("mousedown", (e) => {
    selected = circle;
    offsetX = e.clientX - circle.offsetLeft;
    offsetY = e.clientY - circle.offsetTop;
    circle.style.cursor = "grabbing";
  });
});

document.addEventListener("mousemove", (e) => {
  if (selected) {
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    selected.style.left = x + "px";
    selected.style.top = y + "px";
  }
});

document.addEventListener("mouseup", () => {
  if (selected) {
    selected.style.cursor = "grab";
    console.log("Guardando posición:", selected.style.left, selected.style.top);
    selected = null;
  }
});