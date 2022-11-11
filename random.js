import elementMk from "./randomElem.js";
// const prac = Math.random(1, 10);
// console.log(prac);

// function rrr(min, max) {
//   return Math.random()*(max-min)+min;
// }

function ran(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return `${Math.floor(Math.random() * (max - min + 1)) + min}이 나타났습니다.`;
}
// console.log(ran(1, 10));

let randomTag = ran(1, 10);
console.log(randomTag);
const root = document.getElementById("root");
const div = elementMk("div", ran(1, 10));
root.innerHTML = div;

// const root = document
//   .getElementById("root")
//   .addEventListener("click", function ran(min, max) {
//     document.getElementById("root").innerHTML;
//     return ran(1, 10);
//   });

// document.getElementById("root").addEventListener("click", function (ran(1,10)) {
//   document.getElementById("root").innerHTML = root;
// });
// console.log(ran(1, 10));

// const prac = {
//   ran: function(min, max){
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     console.log(`${Math.floor(Math.random() * (max - min + 1)) + min}이 나타났습니다.`)
//   },
//   click: function(){

//   }
// }

// const root = document
//   .getElementById("root")
//   .addEventListener("click")
//   .elementMk("div", ran(1, 10));
// // const rootMk = `${elementMk("div", ran(1, 10))}`;
// root.innerHTML = rootMk;
