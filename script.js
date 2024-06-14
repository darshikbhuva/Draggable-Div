const container = document.querySelector(".container"),
  header = container.querySelector("header");

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(container);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);

  container.style.left = `${left + movementX}px`;
  container.style.top = `${top + movementY}px`;
}

header.addEventListener("mousedown", () => {
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});
