const text = document.querySelector("h1");
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText);

text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
