const myDiv = document.querySelector("#myDiv");
document.body.appendChild(myDiv);
function takeInput() {
  const header = document.createElement("h2");
  header.innerHTML = document.querySelector(".input-js").value;
  document.body.append(header);
  document.querySelector(".input-js").value = null;}
const selection = window.getSelection();
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    selection.deleteFromDocument(); }});


/* let currenDateTime = new Date();
let date = currenDateTime.toLocaleDateString();
time = currenDateTime.toLocaleTimeString();
let dateTime = `${date} ${time}`;

const myDiv = document.querySelector("#myDiv");
document.body.appendChild(myDiv);
function takeInput() {
  const header = document.createElement("h2");
  header.innerHTML = document.querySelector(".input-js").value +=
    " " + dateTime;

  document.body.append(header);
  document.querySelector(".input-js").value = "";
}
const selection = window.getSelection();
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    selection.deleteFromDocument();
  }
}); */