function iniciarPagina() {
  const icono = document.getElementById("logIN");
  icono.addEventListener("click", iniciarSesion);
  const iconCerrar = document.getElementById("icon-close");
  iconCerrar.addEventListener("click", cerrarInicioUsuario);

  const botonIniciarSesion = document.getElementById("boton-iniciar-sesion");
  botonIniciarSesion.addEventListener("click", validarInicioSesion);
}

function validarInicioSesion() {
  alert("vamos bien perro");

  let inputCorreo = document.getElementById("correo");
  let inputContraseñaCorreo = document.getElementById("contraseña-correo");

  let correo = inputCorreo.value.trim();
  let contraseñaCorreo = inputContraseñaCorreo.value.trim();

  if (correo !== "" || contraseñaCorreo !== "") {
    if (contraseñaCorreo.length >= 10) {
      alert("contraseña cumple con longitud");
    } else {
      alert("la contraseña no cumple con la contidad de caracteres");
      return;
    }
  } else {
    alert("los campos no pueden ir vacios");
    return;
  }
}

function iniciarSesion() {
  let iniciarUsuario = document.getElementById("iniciar-usuario");
  iniciarUsuario.style.display = "block";
}
function cerrarInicioUsuario() {
  let cerrarUsuario = document.getElementById("iniciar-usuario");
  cerrarUsuario.style.display = "none";
}

window.addEventListener("load", iniciarPagina);
