//variables
const btnEnviar=document.querySelector('#enviar');
const email =document.querySelector('#email'); 
const asunto =document.querySelector('#asunto'); 
const mensaje =document.querySelector('#mensaje'); 
const formulario = document.querySelector('#enviar-mail');
aventListener();

function aventListener() {
    document.addEventListener('DOMContentLoaded',iniciarApp);
     //campos del formulario
     email.addEventListener('blur',validarFormulario);
     asunto.addEventListener('blur',validarFormulario);
     mensaje.addEventListener('blur',validarFormulario);
}

//funciones

function iniciarApp() {
    btnEnviar.disabled=true;
    btnEnviar.classList.add('cursos-not-allowed','opacity-50');
}
function validarFormulario(e) {
    if (e.target.value.length > 0) {
    }else{
        e.target.classList.add('border','border-red-500');
        mostrarError();
    }
}
function mostrarError(e) {
    const mensajeError = document.createElement('p');

    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border','border-red-500,background-red-100','text-red-500','p-3','mt-5','text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}