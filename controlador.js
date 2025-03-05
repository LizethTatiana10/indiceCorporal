//alert("estoy vinculado")

let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")


//dectetanto eventos de clic en pantalla
//un evento es una interaccion del usuario (humano) con el codigo (la pagina web) normalmente se interactua por medio de los formularios. 
botonFormulario.addEventListener("click",function(evento){

//1. se inicia desactivando el comportamiento por defecto
evento.preventDefault()

//2. probamos que el evento se esta escuchando con exito
//3. creamos variables para almacenar los datos del usuario

let EstaturaUsuario=inputAlturaUsuario.value
let pesoUsuario=inputPesoUsuario.value 

//4. se crea una variables para el resultado
let resultado=document.getElementById("resultados")

//5. se modifica el resultado con los values 
//6. se calcula lo pedido
let calculoIMC=pesoUsuario/(EstaturaUsuario*EstaturaUsuario)
//6A.se crea variable para almacenar la imagen
let imagen=document.getElementById("foto") 

//7. se debe decidir sobre el resultado 
if(calculoIMC<18.5){
    resultado.textContent="estas bajo peso"
    imagen.src="./img/bajopeso.png"
}
else if(calculoIMC>=18.5 && calculoIMC<24.9){
 resultado.textContent="estas normal"
 imagen.src="./img/normal.png"
}
else if(calculoIMC>=24.9 && calculoIMC<29.9){
 resultado.textContent="estas sobre peso"
 imagen.src="./img/sobrepeso.png"
}
else if(calculoIMC>=29.9 && cal<34.9){
   resultado.textContent="estas obeso"
   imagen.src="./img/extremo.png"
}
else{
   resultado.textContent="haga dieta mij@ jajaja"
   imagen.src="./img/obesidad ll.png"
}



/*Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });*/

})



