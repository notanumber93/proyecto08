let corazon = "&hearts;";
let diamante = "&diams;";
let trebol = "&clubs;";
let pica = "&spades;";
let pintas = [corazon, diamante, pica, trebol];
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

let randompintas = Math.floor(Math.random() * pintas.length);
let pintaUno = document.getElementById("pintaArriba"); 
let pintaDos = document.getElementById("pintaAbajo");

if (randompintas ==  0 || randompintas == 1) {
    pintaUno.className = "rojo";
    pintaDos.className = "rojo";
}
else if (randompintas == 3 || randompintas == 2) {
    pintaUno.className = "negro";
    pintaDos.className = "negro";
}


pintaUno.innerHTML = pintas[randompintas];
pintaDos.innerHTML = pintas[randompintas]; 






let number = document.getElementById("number");

number.innerHTML = numbers[Math.floor(Math.random() * numbers.length)]; 