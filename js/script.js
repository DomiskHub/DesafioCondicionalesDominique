// Ejercicio 1

const image = document.getElementById("borderImage");

image.addEventListener("click", () => {
  console.log(image.style.border);
  if (image.style.border === "") {
    image.style.border = "2px solid red";
  } else {
    image.style.border = "";
  }
});

// Ejercicio 2

const resultado = document.getElementById("result1");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const num3 = document.getElementById("num3").value;
  let suma = Number(num1) + Number(num2) + Number(num3);
  if (suma > 10) {
    resultado.innerHTML = "Llevas demasiados stickers❌";
  } else {
    resultado.innerHTML = "Cantidad :" + suma;
  }
});

// Ejercicio 3

const btn3 = document.getElementById("btn3");
resultfinal = document.getElementById("resultFinal");

btn3.addEventListener("click", () => {
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const options = option1 + option2 + option3;
  if (options === "911") {
    resultFinal.innerHTML = "Password 1 es correcto✅";
  } else if (options === "714") {
    resultFinal.innerHTML = "Password 2 es correcto✅";
  } else {
    resultFinal.innerHTML = "Password incorrecto❌";
  }
});
