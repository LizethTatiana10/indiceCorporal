//alert("estoy vinculado")

let inputnombre=document.getElementById("nombre")
let inputcedula=document.getElementById("cedula")
let inputcorreo=document.getElementById("correo")
let inputasistencia=document.getElementById("asistencia")
let botonFormulario=document.getElementById("boton")


//dectetanto eventos de clic en pantalla
//un evento es una interaccion del usuario (humano) con el codigo (la pagina web) normalmente se interactua por medio de los formularios. 
botonFormulario.addEventListener("click",function(evento){

//1. se inicia desactivando el comportamiento por defecto
evento.preventDefault()

//2. probamos que el evento se esta escuchando con exito
Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
})
