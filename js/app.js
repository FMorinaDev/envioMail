//variables
const btnEnviar=document.querySelector('#enviar');
const email =document.querySelector('#email'); 
const asunto =document.querySelector('#asunto'); 
const mensaje =document.querySelector('#mensaje'); 
const formulario = document.querySelector('#enviar-mail');
const er =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
aventListener();

function aventListener() {
    document.addEventListener('DOMContentLoaded',iniciarApp);
     //campos del formulario
     email.addEventListener('blur',validarFormulario);
     asunto.addEventListener('blur',validarFormulario);
     mensaje.addEventListener('blur',validarFormulario);
     formulario.addEventListener('submit',enviarEmail);
}

//funciones

function iniciarApp() {
    btnEnviar.disabled=true;
    btnEnviar.classList.add('cursos-not-allowed','opacity-50');
}
function validarFormulario(e) {
    if (e.target.value.length > 0) {
        const errores = document.querySelectorAll('.error');
        if (errores.length !== 0) {
            //Eliminar mensaje de error
            const error= document.querySelector('p.error');
            error.remove();
        }
        e.target.classList.remove('border-red-500');
        e.target.classList.add('border','border-green-500');
        if (e.target.type === 'email') {
            if ( er.test(e.target.value)) {
                
            }else{
                e.target.classList.remove('border-green-500');
                e.target.classList.add('border','border-red-500');
                mostrarError('El email no es valido');
            }
        }
    }else{
        e.target.classList.remove('border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if (er.test(email.value)&& asunto.value !==''&&mensaje.value!=='') {
        btnEnviar.disabled=false;
        btnEnviar.classList.remove('cursos-not-allowed','opacity-50');     
    }else{
        btnEnviar.disabled=true;
        btnEnviar.classList.add('cursos-not-allowed','opacity-50');
    }
}
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');

    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500,background-red-100','text-red-500','p-3','mt-5','text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if (errores.length !== 0) {
        //Eliminar mensaje de error
        const error= document.querySelector('p.error');
        error.remove();
    }
    formulario.appendChild(mensajeError);
}
function enviarEmail(e) {
    e.preventDefault();
     const spinner = document.querySelector('#spinner');
     //mostramos el spinner
     spinner.style.display='flex';
     //Luego de 3 segundos ocultamos el spinner
     setTimeout(() => {
         spinner.style.display='none';
         //Mensaje que dice que se envio correctamente
         const parrafo=document.createElement('p');
         parrafo.textContent='El mensaje se envio correctamente';
         parrafo.classList.add('text-center','my-10','p-2','bg-green-500','text-white','font-bold','uppercase');
         //Insertamos el mensaje arriba de los botones
         formulario.insertBefore(parrafo,spinner);
     }, 3000);
}