const botonComenzar = document.getElementById("botonComenzar");
const h3Element = document.querySelector("h3");
const labelElement = document.getElementById("puntajeJug");




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

//funcion que pasa un array a una lista:
function convListaMat(lista,multCarton) {

    const matriz = [];
    for (let i = 0; i < multCarton; i++) {
      matriz[i] = [];
      for (let j = 0; j < multCarton; j++) {
        matriz[i][j] = lista[(i * multCarton) + j];
      }
    }
  
    return matriz;
  }

//funcion que me devuelve una lista con todas las filas de una matriz sin importar size
function obtenerFilasMatriz(matriz) {

    const filas = [];
    for (const fila of matriz) {
      filas.push(fila);
    }
  
    return filas;
}

//funcion que me devuelve una lista con todas las columnas de una matriz 
function obtenerColumnasMatriz(matriz) {
  
    const filas = matriz.length;
    const columnas = [];
  
    // Recorrer las columnas
    for (let i = 0; i < filas; i++) {
      columnas.push([]);
  
      // Recorrer las filas de la columna actual
      for (let j = 0; j < filas; j++) {
        columnas[i].push(matriz[j][i]);
      }
    }
  
    return columnas;

  }

//funcion que me devuelve lista con todas las diagonales de una matriz 
function obtenerDiagMat(matriz){

    const filas = matriz.length;
    const columnas = matriz[0].length;
    const diagonalPrincipal = [];
    const diagonalSecundaria = [];
  
    // Diagonal principal
    for (let i = 0; i < filas ; i++) {
      diagonalPrincipal.push(matriz[i][i]);
    }
  
    // Diagonal secundaria
    for (let i = 0; i < filas; i++) {
      diagonalSecundaria.push(matriz[i][columnas - 1 - i]);
    }
  
    return [diagonalPrincipal, diagonalSecundaria];
  }


//este boton guardara en una lista los nombres de los jugadores, guardara en un diccionario los datos de cada jugador, mostrara los objetos a mostrar despues de presionar el boton de comenzar,
//y se guardara en una variable la lista de listas de los cartones
botonComenzar.addEventListener('click', function() {
    nombresJugadores = obtenerNombres()
    window.alert(nombresJugadores);
    Cartones = generarCartones();
    window.alert(Cartones[0])
    window.alert(convListaMat(Cartones[0],multCarton.value)[1])


    jugadores = [
        {
          nombre: nombresJugadores[0],
          partidas: 0,
          victorias: 0,
          puntaje: 0,
          carton: Cartones[0],
          filas: filasJug1 = obtenerFilasMatriz(convListaMat(Cartones[0],multCarton.value)),
          columnas: colJug1 = obtenerColumnasMatriz(convListaMat(Cartones[0],multCarton.value)),
          diagonales: diagJug1 = obtenerDiagMat(convListaMat(Cartones[0],multCarton.value)),
        },
        {
          nombre: nombresJugadores[1],
          partidas: 0,
          victorias: 0,
          puntaje: 0,
          carton: Cartones[1],
          filas: filasJug2 =  obtenerFilasMatriz(convListaMat(Cartones[1],multCarton.value)),
          columnas: colJug2 = obtenerColumnasMatriz(convListaMat(Cartones[1],multCarton.value)),
          diagonales: diagJug2 = obtenerDiagMat(convListaMat(Cartones[1],multCarton.value)),
        },
        {
            nombre: nombresJugadores[2],
            partidas: 0,
            victorias: 0,
            puntaje: 0,
            carton:Cartones[2],
            filas: filasJug3 = obtenerFilasMatriz(convListaMat(Cartones[2],multCarton.value)),
            columnas: colJug3 = obtenerColumnasMatriz(convListaMat(Cartones[2],multCarton.value)),
            diagonales: diagJug3 = obtenerDiagMat(convListaMat(Cartones[2],multCarton.value)),
        },
        {
            nombre: nombresJugadores[3],
            partidas: 0,
            victorias: 0,
            puntaje: 0,
            carton: Cartones[3],
            filas: filasJug4 = obtenerFilasMatriz(convListaMat(Cartones[3],multCarton.value)),
            columnas: colJug4 = obtenerColumnasMatriz(convListaMat(Cartones[3],multCarton.value)),
            diagonales: diagJug4 = obtenerDiagMat(convListaMat(Cartones[3],multCarton.value)),
        },
        
      ]
      mostrar();
      /*window.alert(jugadores[0].carton)
      window.alert(jugadores[0].filas)
      window.alert(jugadores[0].columnas)
      window.alert(jugadores[0].diagonales)
      window.alert(jugadores[3].carton)
      window.alert(jugadores[3].filas)
      window.alert(jugadores[3].columnas)
      window.alert(jugadores[3].diagonales)*/

      
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
                labelElement.textContent = "puntaje:"+jugador.puntaje;               
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


    



  

 