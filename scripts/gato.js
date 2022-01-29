/*Asignacion de elementos web en variables*/
const $reiniciar = document.querySelector('.reiniciar')
const $estatus = document.querySelector('.estatus')
const $celdas = document.querySelectorAll('.celda')

/*Variables de Juego para controlar el flujo*/
let estaJugando = true
let esXSiguiente = true

/*Funciones para cambiar el estado de la aplicacion*/
const ejecutarReset = (evento) => {
    console.log(evento)
}

const clickEnCelda = (evento) => {
    const listaDeClases = evento.target.classList
    //Obteniendo la ubicacion del click por medio de la clase HTML que agregamos para identificar el click.
    const localizacion = listaDeClases[1]


    //Validar si la clase ya contiene 'X' u 'O' para no agregar dos valores repetidos
    if(listaDeClases[2]=== 'x' || listaDeClases[2]=== 'o' ){
        return
    }else{
        //Agregar el valor del click a la clase basado en la variable booleana "esXSiguiente"
        if(esXSiguiente){
            listaDeClases.add('x')
            //asignando el valor contrario para el siguiente click
            esXSiguiente = !esXSiguiente
            //Funcion que extraera el status del DOM segun la clase y lo asigna a una variable.
            verificarEstadoDelJuego()
        }else{
            listaDeClases.add('o')
            esXSiguiente = !esXSiguiente
            verificarEstadoDelJuego()
        }
        console.log(listaDeClases)
    }
}

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
    //en progreso

}
/*Event Listeners para escuchar los cambios en el DOM*/
$reiniciar.addEventListener('click', ejecutarReset)

//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of
for(const celda of $celdas){
    celda.addEventListener('click', clickEnCelda)
}

