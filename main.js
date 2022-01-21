// hamburger menu z js
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

// varibales
console.log("Witam Cie serdecznie na mojej stronie");

const age = 29;
const firstName = "Maciej";

console.log(firstName);
console.log(age);
console.log(`Nazywam sie ${firstName} i mam ${age} lat.`);

// dom JS

const heading = document.querySelector(".main__heading");

heading.innerHTML = "Zmiana poprzez JS";

const emptyParagraph = document.querySelector(".about__new");

emptyParagraph.innerHTML = "Trzymajcie za mnie kciuki";

// function js

function calculate(myNumber) {
  console.log(`Dostalem kieszonkowego ${myNumber} zl`);
  return myNumber * 7;
}

const myResult = calculate(45);
console.log(myResult);

// funkcja greet
function greet1(age, firstName) {
  console.log(`Witam drogi odwiedzajacy nazywam sie ${firstName} i mam ${age} lat.`);
}

greet1(65, "Kajetan");
greet1(age, firstName);

// funkcja greet strzalkowa
const greet = (age, firstName) => {
  console.log(`Witam drogi odwiedzajacy nazywam sie ${firstName} i mam ${age} lat.`);
};

greet(100, "Jozek");

// funkcja zmiany tresci w tekscie
function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".about__new", "Witajcie! </br>Udalo mi sie to zrobic!!!!");

// event js

const button = document.querySelector(".action--js");

const myClick = () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = "Dodany click na buton JS event";
};

button.addEventListener("click", myClick);
