const botonComenzar = document.getElementById("botonComenzar");

multCarton = document.getElementById("form-jugadores").querySelector("#tamano-carton");

function ocultar(){
    const formulario = document.getElementById("form-jugadores");
    const div = document.getElementById("form-container");
    div.classList.remove("visible");
    div.classList.add("oculto");
    formulario.classList.remove("visible");
    formulario.classList.add("oculto");
    const h2 = document.querySelector("h2");
    h2.style.display = "none";
    return false;
}

function obtenerNombres(){
    var nombreJugador1 = document.getElementById("nombre-jugador-1").value;
    var nombreJugador2 = document.getElementById("nombre-jugador-2").value;
    var nombreJugador3 = document.getElementById("nombre-jugador-3").value;
    var nombreJugador4 = document.getElementById("nombre-jugador-4").value;

    const nombresJugadores = [nombreJugador1, nombreJugador2, nombreJugador3, nombreJugador4];
    return nombresJugadores;
}

const btnGen = document.getElementById("btn-generar-numero");
const numGen = document.getElementById("numero-generado");

function mostrar(){
    
    btnGen.classList.remove("oculto");
    btnGen.classList.add("visible");
    numGen.classList.remove("oculto");
    numGen.classList.add("visible");
    return false;
}


function generarCarton(tamanocarton) {
    const carton = [];
    for (let i = 0; i < tamanocarton; i++) {
      carton.push(Math.floor(Math.random() * 50) + 1);
    }
    return carton;
  }

function generarCartones() {
    const cartones = [];
    for (let i = 0; i < 4; i++) {
      cartones.push(generarCarton(multCarton.value*multCarton.value));
    }
    return cartones;
  }


botonComenzar.addEventListener('click', function() {
    nombresJugadores = obtenerNombres()
    window.alert(nombresJugadores);
    var jugadores = [
        {
          nombre: nombresJugadores[0],
          partidas: 0,
          victorias: 0,
          puntaje: 0
        },
        {
          nombre: nombresJugadores[1],
          partidas: 0,
          victorias: 0,
          puntaje: 0
        },
        {
            nombre: nombresJugadores[2],
            partidas: 0,
            victorias: 0,
            puntaje: 0
        },
        {
            nombre: nombresJugadores[3],
            partidas: 0,
            victorias: 0,
            puntaje: 0
        },
        
      ]
      //window.alert(jugadores[0].nombre);
      mostrar()
      Cartones = generarCartones();
      window.alert(Cartones[0]);
      window.alert(Cartones[1]);
      window.alert(Cartones[2]);
      window.alert(Cartones[3]);
      
    
});



var numeroGenerado = 0;
var pulsacionesRestantes = 25;

function generarNumero() {
  if (pulsacionesRestantes > 0) {
    numeroGenerado = Math.floor(Math.random() * 50) + 1;
    numGen.textContent = numeroGenerado;
    btnGen.textContent = pulsacionesRestantes;
  } else {
    btnGen.textContent = "Turnos Agotados";
  }
}

btnGen.addEventListener('click', function() {

    pulsacionesRestantes--;
    generarNumero();
    
});




  

 