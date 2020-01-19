var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", changeBack);
color2.addEventListener("input", changeBack);

function changeBack() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";

  css.textContent = body.style.background + ";";
}

function randomizeColor() {
  color1.value = rnd();
  color2.value = rnd();
  changeBack();
}

function rnd() {
  return (
    "#" +
    getRandomIntHex(0, 256, 2) +
    getRandomIntHex(0, 256, 2) +
    getRandomIntHex(0, 256, 2)
  );
}

function getRandomIntHex(min, max, digits) {
  min = Math.ceil(min);
  max = Math.floor(max);
  valueHex = (Math.floor(Math.random() * (max - min)) + min).toString(16); //Максимум не включается, минимум включается
  return "0".repeat(digits - valueHex.length) + valueHex;
}
