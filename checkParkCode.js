// import elementMk from "./elementMk.js";
// const babyImgs = [
//   "./images/page.png",
//   "./images/page2.png",
//   "./images/page3.png",
// ];
// const imgs = [
//   "./images/ghibli.jpg",
//   "./images/ghibli2.jpg",
//   "./images/ghibli3.jpg",
// ];
// 0~1 *3 =  0~3
// index 3번쨰 위치 없지
// 0 1 2 3???
// console.log(Math.random());
let randomNumber =
  Math.floor(Math.random() * 3) === 3 ? 2 : Math.floor(Math.random() * 3);
// console.log(randomNumber);
let imgThing = `./images/ghibli${
  randomNumber + 1 === 1 ? "" : String(randomNumber + 1)
}.jpg`

function moreElement(babyImg) {
  babyImg = `./images/page${
    randomNumber + 1 === 1 ? "" : String(randomNumber + 1)
  }.png`;
  return babyImg;
  imgThing === "./images/ghibli.jpg"
    ? (babyImg = "./images/page.png")
    : imgThing === "./images/ghibli2.jpg"
    ? (babyImg = "./images/page2.png")
    : imgThing === "./images/ghibli3.jpg"
    ? (babyImg = "./images/page3.png")
    : console.error();
  //   if(imgThing === './images/ghibli.jpg'){
  //   babyImg = "./images/page.png"
  //   // return (imgThing,babyImg)
  // }else if(imgThing ==='./images/ghibli2.jpg'){
  //   babyImg = "./images/page2.png"
  //   // return (imgThing, babyImg)
  // }else if(imgThing ==='./images/ghibli3.jpg'){
  //   babyImg = "./images/page3.png"

  // }
  // return babyImg;
}
export { moreElement, imgThing };
// console.log(imgThing)
// console.log(moreElement())
// const main = `${elementMk("div", imgThing)}`
// const baby = `${elementMk("div", moreElement())}`
// root.innerHTML(main)
// root.innerHTML(baby)
