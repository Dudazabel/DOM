console.log("--1");
const headerID = document.getElementById("cabecalho");
console.log(headerID);

console.log("--2.1");
const gridSelection = document.getElementsByClassName("grid-section");
console.log(gridSelection);

console.log("--2.2");
const gridSelection2 = document.getElementsByClassName("grid-section");
console.log(gridSelection2[0]);

console.log("--3.1");
const selectImage = document.getElementsByTagName("img");
console.log(selectImage);

console.log("--3.2");
const selectImage2 = document.getElementsByTagName("img");
console.log(selectImage2.length);

//Precisa colocar o ponto para expecificar que é classe, no getElement ele já está especificando que é uma classe.
console.log("--4.1");
const primeiroP = document.querySelector(".grid-section p");
console.log(primeiroP);

console.log("--5.1");
const selectH2 = document.querySelectorAll("h2");
console.log(selectH2);

console.log("--5.2");
