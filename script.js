const Email = document.getElementById('email');
const Nombre = document.getElementById('nombre');
const Contraseña = document.getElementById('contraseña');
const Mayusculas = document.getElementById('Mayusculas');
const Caracteres = document.getElementById('Caracteres');
const Numeros = document.getElementById('Numeros');
const Registrarse = document.getElementById('enviar');
const ConfirmarContraseña = document.getElementById('verificarContraseña');
const MostrarMensaje = document.getElementById('MostrarMensaje');
const MostrarErrorMail = document.getElementById('MostrarErrorMail');
const MostrarErrorNombre = document.getElementById('MostarErrorNombre');
const contraseñaSegura = new RegExp("^(?=.*[A-Z])(?=.*[0-9]).{8,}$");
const contraseñaCaracteres = new RegExp("^.{8,}$");
const contraseñaNumeros = new RegExp("^(?=.*[0-9]).+$");
const contraseñaMayuscula = new RegExp("^(?=.*[A-Z]).+$");
const gmailValido = new RegExp("(@gmail)+");
const minCaracteres = new RegExp("^.{3,}$");

MostrarMensaje.hidden = true;
MostrarErrorMail.hidden = true;
MostrarErrorNombre.hidden = true;
Mayusculas.style.color = 'red';
Caracteres.style.color = 'red';
Numeros.style.color = 'red';
MostrarMensaje.style.color = 'red';
MostrarErrorMail.style.color = 'red';
MostrarErrorNombre.style.color = 'red';
Registrarse.disabled = true;

let nombreValue, emailValue, passwordValue;

Nombre.addEventListener('input', () => {
    nombreValue = Nombre.value;

    if(!minCaracteres.test(nombreValue)){
        MostrarErrorNombre.style.color = 'red';
        MostrarErrorNombre.hidden = false;
    } else {
        MostrarErrorNombre.hidden = true;
    }

    EnviarForm();
});

Email.addEventListener('input', () => {
    emailValue = Email.value;

    if(!gmailValido.test(emailValue)){
        MostrarErrorMail.style.color = 'red';
        MostrarErrorMail.hidden = false;
    } else {
        MostrarErrorMail.hidden = true;
    }

    EnviarForm();
});

Contraseña.addEventListener('input', () => {
    passwordValue = Contraseña.value;

    Mayusculas.style.color = 'green';
    Caracteres.style.color = 'green';
    Numeros.style.color = 'green';

    if(!contraseñaSegura.test(passwordValue) || Contraseña.value != ConfirmarContraseña.value){
        if (!contraseñaCaracteres.test(passwordValue)) {
            Caracteres.style.color = 'red';
        }
        if (!contraseñaMayuscula.test(passwordValue)) {
            Mayusculas.style.color = 'red';
        }
        if (!contraseñaNumeros.test(passwordValue)) {
            Numeros.style.color = 'red';
        }
        
        Registrarse.style.opacity = 0.6;
    } else {
        MostrarMensaje.hidden = true;
        Registrarse.style.opacity = 1;
    }

    EnviarForm();
});

ConfirmarContraseña.addEventListener('input', () => {
    if(Contraseña.value != ConfirmarContraseña.value){
        MostrarMensaje.hidden = false;
        Registrarse.style.opacity = 0.6;
    } else {
        MostrarMensaje.hidden = true;
        Registrarse.style.opacity = 1;
    }

    EnviarForm();
});

function EnviarForm(){
    if(ConfirmarContraseña.value == Contraseña.value && contraseñaSegura.test(passwordValue) && minCaracteres.test(nombreValue) && gmailValido.test(emailValue)){
        Registrarse.disabled = false;
    } else {
        Registrarse.disabled = true;
    }
}


const enviar = document.getElementById("enviar")

function confirmarEnvio(){
    confirm("Desea enviar el formulario?")
}