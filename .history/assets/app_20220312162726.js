// const text = document.querySelector("h1");
// const strText = text.textContent;
// const splitText = strText.split("");
// console.log(splitText);

// text.textContent = "";
// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span> " + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);
// function onTick() {
//   const span = text.querySelectorAll("span")[char];
//   span.classList.add("fade");
//   char++;
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }
const h1 = document.querySelector("h1");
const text = h1.textContent;
const splitText = text.split("");
h1.textContent = "";
console.log(splitText);
for (let i = 0; i < splitText.length; i++) {
  h1.innerHTML += "<span>" + splitText[i] + "</span>";
}

let timer = setInterval(onTick, 50);
let char = 0;
function onTick() {
  const span = h1.querySelectorAll("span")[0];
  span.classList.add(fade);
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
}
