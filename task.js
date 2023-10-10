let oneElement = document.getElementById("one")
let twoElement = document.getElementById("two")
let thirdElement = document.getElementById("three")
let fouElement = document.getElementById("fou")
let fivElement = document.getElementById("fiv")
let sixElement = document.getElementById("six")
let sevElement  = document.getElementById("sev")
let eighElement = document.getElementById("eig")
let nineElement = document.getElementById("nin")
let zeroElement = document.getElementById("zero")
let zerosElement = document.getElementById("zeros");
let multElement = document.getElementById("mul")
let plusElement = document.getElementById("plu")
let minusElement = document.getElementById("minus")
let equalElement = document.getElementById("equ")
let delElement = document.getElementById("ce")

const display = document.getElementById('display');

oneElement.addEventListener("click", () =>{
   display.value += 1;
})
twoElement.addEventListener("click", () =>{
  display.value += 2;
})
thirdElement.addEventListener("click", () =>{
  display.value += 3;
})
fouElement.addEventListener("click", () =>{
  display.value += 4;
})
fivElement.addEventListener("click", () =>{
  display.value += 5;
})
sixElement.addEventListener("click", () =>{
  display.value += 6;
})
sevElement.addEventListener("click", () =>{
  display.value += 7;
})
eighElement.addEventListener("click", () =>{
  display.value += 8;
})
nineElement.addEventListener("click", () =>{
  display.value += 9;
})
zerosElement.addEventListener("click", () =>{
  display.value += 0;
})
zeroElement.addEventListener("click", () =>{
  display.value += "00" ;
})
plusElement.addEventListener("click", () =>{
  display.value += "+";
})
minusElement.addEventListener("click", () =>{
  display.value += "-";
})
multElement.addEventListener("click", () =>{
  display.value += "*";
})
delElement.addEventListener("click", () => {
  display.value += "%"
})

 function appendToDisplay(value) {
   display.value += value;
  }

 function clearDisplay() {
   display.value = '';
 }
 
  function calculateResult() {
    try {
      display.value = eval(display.value);
   } catch (error) {
      display.value = 'Error';
    }
  }
 display.addEventListener("keydown", (key) =>{
  prompt("Only numbers")
 });












