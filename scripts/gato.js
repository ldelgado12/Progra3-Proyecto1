/*Asignacion de elementos web en variables*/
const $reiniciar = document.querySelector('.reiniciar')
const $estatus = document.querySelector('.estatus')
const $celdas = document.querySelectorAll('.celda')
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

/*Variables de Juego para controlar el flujo*/
let estaJugando = true
let esXSiguiente = true
let ganador = null

/*Simbolos usados en el CSS::Before*/
const simboloX = '╳'
const simboloO = '◯'

/*Funciones para cambiar el estado de la aplicacion*/
const ejecutarReset = (evento) => {
    console.log(evento)
}

/*Funciones para cerrar el pop-up*/
const cerrarPopUp = (evento) => {
    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });
}

const clickEnCelda = (evento) => {
    const listaDeClases = evento.target.classList
    //Obteniendo la ubicacion del click por medio de la clase HTML que agregamos para identificar el click.
    const localizacion = listaDeClases[1]


    //Validar si la clase ya contiene 'X' u 'O' para no agregar dos valores repetidos
    if(listaDeClases[2]=== 'x' || listaDeClases[2]=== 'o' ){
      //pop-up de error
        modal_container.classList.add('show');
        return
    }else{
        //Agregar el valor del click a la clase basado en la variable booleana "esXSiguiente"
        if(esXSiguiente){
            listaDeClases.add('x')
            //asignando el valor contrario para el siguiente click
            esXSiguiente = !esXSiguiente
            //Cambiar jugador en el HTML
            $estatus.innerHTML = `El siguiente es: ${simboloO}`
            //Funcion que extraera el status del DOM segun la clase y lo asigna a una variable.
            verificarEstadoDelJuego()
        }else{
            listaDeClases.add('o')
            esXSiguiente = !esXSiguiente
            $estatus.innerHTML = `El siguiente es: ${simboloX}` 
            verificarEstadoDelJuego()
        }
        console.log(listaDeClases)
    }
}

const obtenerSimbolo = (letra) => letra === 'x' ? simboloX : simboloO

const verificarEstadoDelJuego = () => {
    const arribaIzquierda = $celdas[0].classList[2]
    const arribaMedio = $celdas[1].classList[2]
    const arribaDerecha = $celdas[2].classList[2]
    const medioIzquierda = $celdas[3].classList[2]
    const medioMedio = $celdas[4].classList[2]
    const medioDerecha = $celdas[5].classList[2]
    const abajoIzquierda = $celdas[6].classList[2]
    const abajoMedio = $celdas[7].classList[2]
    const abajoDerecha = $celdas[8].classList[2]
    console.log(arribaIzquierda, arribaMedio,arribaDerecha, medioIzquierda, medioMedio, medioDerecha, abajoIzquierda, abajoMedio, abajoDerecha)

    //Verificar si existe un ganador
    //En caso de que si, se asigna la variable ganadora y se asigna false a "estaJugando" ya que la ejecucion debe terminar.
    //verifica horizontales
    if(arribaIzquierda != null && arribaIzquierda === arribaMedio && arribaMedio === arribaDerecha){
        estaJugando = false
        ganador = arribaIzquierda
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }else if (medioIzquierda != null && medioIzquierda === medioMedio && medioMedio === medioDerecha){
        estaJugando = false
        ganador = medioIzquierda
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }else if (abajoIzquierda != null && abajoIzquierda === abajoMedio && abajoMedio === abajoDerecha){
        estaJugando = false
        ganador = abajoIzquierda
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }
    //verifica verticales
    else if (arribaIzquierda != null && arribaIzquierda === medioIzquierda && medioIzquierda === abajoIzquierda){
        estaJugando = false
        ganador = arribaIzquierda
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    } else if (arribaMedio != null && arribaMedio === medioMedio && medioMedio === abajoMedio){
        estaJugando = false
        ganador = arribaMedio
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }else if (arribaDerecha != null && arribaDerecha === medioDerecha && medioDerecha === abajoDerecha){
        estaJugando = false
        ganador = arribaDerecha
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }
    //verifica horizontales
    else if (arribaIzquierda != null && arribaIzquierda === medioMedio && medioMedio === abajoDerecha){
        estaJugando = false
        ganador = arribaIzquierda
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }else if(arribaDerecha != null && arribaDerecha === medioMedio && medioMedio === abajoIzquierda){
        estaJugando = false
        ganador = arribaDerecha
        $estatus.innerHTML = `${obtenerSimbolo(ganador)} ha ganado. Felicidades!`
    }

    //En progreso funcion para manejar el ganador y logica de demas formas de ganar.


}

/*Event Listeners para escuchar los cambios en el DOM*/
$reiniciar.addEventListener('click', ejecutarReset)

/* Evento para cerrar el pop-up */
close.addEventListener('click', cerrarPopUp)

//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of
for(const celda of $celdas){
    celda.addEventListener('click', clickEnCelda)
}
