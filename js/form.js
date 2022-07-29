const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let apellido = document.getElementById('apellidos').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 5493624334733;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es:%0A--${nombre}
%20${apellido}--%0A%0AEmail:%0A--${email}--%0A%0AConsulta:%0A%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)