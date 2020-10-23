var form = document.getElementById('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');
var mensaje = document.getElementById('p');
var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit',function (e){
    e.preventDefault();
   if (usuario.value === '' || clave.value === '') {
     mensaje.style.color = 'red';
  mensaje.textContent = 'Completá ambos datos!';
  }
  else if (!expresion.test(usuario.value)){
    mensaje.style.color = 'red';
  mensaje.textContent = 'Usuario no valido, ingresar su correo.';
  }
  else {
    mensaje.style.color = 'green';
    mensaje.textContent = 'Datos Correctos.';
  }
}
);
