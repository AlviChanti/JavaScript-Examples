const myDiv = document.querySelector("#myDiv");
document.body.appendChild(myDiv);
function takeInput() {
  const header = document.createElement("h2");
  header.innerHTML = document.querySelector(".input-js").value;
  document.body.append(header);
  document.querySelector(".input-js").value = null;}
const selection = window.getSelection();
document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    selection.deleteFromDocument(); }});

//THE SHORTEST POSSIBLE TO-DO LIST IN JAVASCRIPT 11 LINES OF CODE