const botonComenzar = document.getElementById("botonComenzar");
const h3Element = document.querySelector("h3");


//mult tamano de carton con querySel
multCarton = document.getElementById("form-jugadores").querySelector("#tamano-carton");

//ocultar "objetos" pag mostrada inicialmente
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

//funcion obtener nombre d elos jugadores del form
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
const cartones = document.getElementById("cartones-container");
const cartonBingo = document.getElementById("cartonBingo")

//mostrar "objetos" despues de comenzar la partida
function mostrar(){   
    btnGen.classList.remove("oculto");
    btnGen.classList.add("visible");
    numGen.classList.remove("oculto");
    numGen.classList.add("visible");
    cartones.classList.remove("oculto")
    cartones.classList.add("visible");
    cartonBingo.classList.remove("oculto")
    cartonBingo.classList.add("visible");

    return false;
}

//funcion generar carton genera los numeros de cartones de bingo sin repetirse y de manera aleatoria entre el 1 y el 50
function generarCarton(tamanocarton) {
    const carton = [];
    const usados = new Set();

    while (carton.length < tamanocarton) {
      const numero = Math.floor(Math.random() * 50) + 1;

      if (!usados.has(numero)){
        carton.push(numero);
        usados.add(numero);
      }
    }
    return carton;
  }

  //con la funcion anterior, genera 4 cartones, uno para cada jugador y crea una array de 4 espacios donde mete cada carton de bingo que tambien sera un array del tamano seleccionado por el usuario
function generarCartones() {
    const cartones = [];
    for (let i = 0; i < 4; i++) {
      cartones.push(generarCarton(multCarton.value*multCarton.value));
    }
    return cartones;
  }

//esta funcion genera una lista de 25 numeros (uno por cada turno) de numeros aleatorios sin repetirse entre el 1 y 3l 50 que seran los numeros del bingo
function generarNumerosBingo(){
    const numeros = [];
    const numerosUsados = new Set();

    while (numeros.length < 25) {
    const numeroGen = Math.floor(Math.random() * 50) + 1;

    if (!numerosUsados.has(numeroGen)){
        numeros.push(numeroGen);
        numerosUsados.add(numeroGen);
    }
    }
    return numeros;
}

var numerosBingo = generarNumerosBingo();

//Definimos las variables que deseamos guardar despues de presionar el boton de comenzar
var jugadores = [];
var nombresJugadores = [];
var Cartones = [];


//este boton guardara en una lista los nombres de los jugadores, guardara en un diccionario los datos de cada jugador, mostrara los objetos a mostrar despues de presionar el boton de comenzar,
//y se guardara en una variable la lista de listas de los cartones
botonComenzar.addEventListener('click', function() {
    nombresJugadores = obtenerNombres()
    window.alert(nombresJugadores);
    Cartones = generarCartones();
    jugadores = [
        {
          nombre: nombresJugadores[0],
          partidas: 0,
          victorias: 0,
          puntaje: 0,
          carton:Cartones[0]
        },
        {
          nombre: nombresJugadores[1],
          partidas: 0,
          victorias: 0,
          puntaje: 0,
          carton: Cartones[1]
        },
        {
            nombre: nombresJugadores[2],
            partidas: 0,
            victorias: 0,
            puntaje: 0,
            carton:Cartones[2]
        },
        {
            nombre: nombresJugadores[3],
            partidas: 0,
            victorias: 0,
            puntaje: 0,
            carton: Cartones[3]
        },
        
      ]
      mostrar()

      
    }
    
);


var i = 24
var pulsacionesRestantes = 25;

//esta es la funcion que se llamara cada vez que el usuario presione generar numero, 
//que a su vez mostrara el numero generado y se podra pulsar un max de 25 veces
function generarNumero() {
  if (pulsacionesRestantes > 0) {   
    numGen.textContent = numerosBingo[i];
    btnGen.textContent = pulsacionesRestantes;

  } else {
    btnGen.textContent = "Turnos Agotados";
  }
}

//TURNOS BINGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
btnGen.addEventListener('click', function() {
    pulsacionesRestantes--;
    generarNumero();
    for (k=0;k<4;k++){
        var jugador = jugadores[k]
        for (j=0; j<jugador.carton.length; j++){
            if(jugador.carton[j]==numerosBingo[i]){
                jugador.carton[j] = 0;
                j=jugador.carton.length;
                document.querySelector('.game').innerHTML = "";
                cartonGen(jugador.carton);
                h3Element.textContent = jugador.nombre;
            }
        }
    }

    i--;
    
});


const numCarton = document.getElementById("cartonJugador");

//Definimos variables cuyo valor deseamos guardar
//nombre del jugador seleccionado en el select
var nomJug="";
var carJug = [];


//funcion que crea carton
function cartonGen(lista){
    if (lista.length == 9){
        for(var i = 0; i < lista.length; i++ ){
            let box = document.createElement('div')
            box.className =  'item1';
            box.innerHTML = lista[i];
            document.querySelector('.game').appendChild(box);
        }
    };
    if(lista.length == 16){
        for(var i = 0; i < lista.length; i++ ){
            let box = document.createElement('div')
            box.className =  'item2';
            box.innerHTML = lista[i];
            document.querySelector('.game').appendChild(box);
        }
    };
    if(lista.length == 25){
        for(var i = 0; i < lista.length; i++ ){
            let box = document.createElement('div')
            box.className =  'item3';
            box.innerHTML = lista[i];
            document.querySelector('.game').appendChild(box);
        }
    }
}



//event listener para obtener numero del jugador seleccionado y mostrar su carton

//CAMBIAR SELECCION DE CARTONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
numCarton.addEventListener("change", (event) => {
  var selVal = event.target.value;
  if (selVal!=4){
    nomJug = jugadores[selVal].nombre
    carJug = jugadores[selVal].carton;
    window.alert(carJug);
    //limpiamos el div de clase game
    document.querySelector('.game').innerHTML = "";
    cartonGen(carJug);
    h3Element.textContent = nomJug;
    }
}

);


    



  

 