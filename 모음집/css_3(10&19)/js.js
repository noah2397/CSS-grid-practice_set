const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num10 = document.querySelector(".num10");
const image = document.querySelector(".center-image");

var imageArray = [
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
];

function change(number) {
  var ImageName = imageArray[parseInt(number)];
  image.style.backgroundImage = `url(src/img/${ImageName})`;
}

num1.addEventListener("mouseover", function () {
  change("0");
});
num2.addEventListener("mouseover", function () {
  change("1");
});
num3.addEventListener("mouseover", function () {
  change("2");
});
num4.addEventListener("mouseover", function () {
  change("3");
});
num5.addEventListener("mouseover", function () {
  change("4");
});
num6.addEventListener("mouseover", function () {
  change("5");
});
num7.addEventListener("mouseover", function () {
  change("6");
});
num8.addEventListener("mouseover", function () {
  change("7");
});
num9.addEventListener("mouseover", function () {
  change("8");
});
num10.addEventListener("mouseover", function () {
  change("9");
});
