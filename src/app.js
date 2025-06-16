import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let palos = ["♥", "♠", "♣", "♦"];
  let cartaValor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let tiempo = 10;
  let intervalo;


  function generarCarta() {
    let randomPalos = palos[Math.floor(Math.random() * palos.length)];
    let randomValor = cartaValor[Math.floor(Math.random() * cartaValor.length)];
    //utilizo mejor condicional ternario :)
    let color = randomPalos === "♥" || randomPalos === "♦" ? "red" : "black";

    document.querySelector(".top").innerHTML = randomPalos;
    document.querySelector(".bottom").innerHTML = randomPalos;
    document.querySelector(".top").style.color = color;
    document.querySelector(".bottom").style.color = color;
    document.querySelector(".number").innerHTML = randomValor;


  }
  function inicioConteo() {
    tiempo = 10; 
    intervalo = setInterval(() => {
      tiempo--;
      document.getElementById("botonConteo").innerHTML = `Cambiala en ${tiempo}s`;
      if (tiempo === 0){
        clearInterval(intervalo);
        generarCarta();
          document.getElementById("botonConteo").innerHTML = "Cámbiala en 10s";
      }
      
    }, 1000);
    
    
  }
  document.getElementById("botonConteo").addEventListener("click", inicioConteo);

  generarCarta();

  document.getElementById("boton").addEventListener("click", generarCarta);
};
