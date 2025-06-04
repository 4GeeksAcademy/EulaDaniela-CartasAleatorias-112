import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(cartasAleatorias) {
  //write your code here
let palos = ["♥","♠","♣","♦"];
let cartaValor = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

let randomPalos = palos [Math.floor(Math.random()* palos.length)];
let randomValor = cartaValor [Math.floor(Math.random()* cartaValor.length)];
console.log(randomPalos);
console.log(randomValor);
// si es corazon o diamante sera rojo sino negro

if (randomPalos === "♥" || randomPalos === "♦") {
  document.querySelector(".top").innerHTML = randomPalos;
    document.querySelector(".bottom").innerHTML = randomPalos;
 
document.querySelector(".top").style.color="red";
document.querySelector(".bottom").style.color="red";
 } else {
document.querySelector(".bottom").style.color = "black";
document.querySelector(".top").style.color = "black";
  document.querySelector(".top").innerHTML = randomPalos;
    document.querySelector(".bottom").innerHTML = randomPalos;
  
 }

document.querySelector(".number").innerHTML = randomValor
};
