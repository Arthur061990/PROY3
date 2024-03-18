// Obtener referencia al botón "Conoce más"
var btnConoceMas = document.getElementById('btn-conoce-mas');

// Agregar un evento de clic al botón
btnConoceMas.addEventListener('click', function(event) {
    // Evitar que el enlace se comporte como un enlace normal
    event.preventDefault();
   
    console.log("click")

});



function handleSubmit(event){
    event.preventDefault() /* Solo se pone para que tu controle con tu funcion lo q haga*/ 
    
    const form = event.target
    const data = new FormData(form)
    const user = {
        name: data.get('name'),
        email: data.get('email'),
        info: data.get('info')
    }

    
    console.log("Nombre: "+user.name +" Email: "+user.email+" Info: "+user.info)
    alert("HEMOS RECIBIDO TU PETICION, NOS PONEMOS EN CONTACTO A LA BREVEDAD--")
}

const boton = document.querySelector('#texto1')
boton.addEventListener('submit',handleSubmit)

