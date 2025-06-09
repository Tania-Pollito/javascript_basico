// funcion para mstrar un mensaje de dialogo emergente
function mostrarMensaje(){
    //alert permite visualizar un cuadro de dialogo
    alert("Hola Mundo :");
}
//variables
function imprimirVariables() {
    let nombre = "Tania";
    let edad= 22;
    //Forma tradicional
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    //Forma moderna de concatenar cadenas
    console.log(`nombre: ${nombre}, edad: ${edad}`);
    console.error("Error: Haga otra vez");
    console.warn("Advertencia: X yX");
}
function arreglos(){
    let frutas = ['manzana', 'pera', 'banana'];
    for (let f of frutas ){
        console.log(f)
    }
    if (frutas[1]=== 'pera'){
        console.log("La segunda fruta es una pera");
    
        }
        else{
            console.log('No es una pera')
        }
    
}