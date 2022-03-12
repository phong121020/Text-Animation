const text = document.querySelector("h1");
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText);

text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
  const span = text.document.querySelectorAll("span");
}
