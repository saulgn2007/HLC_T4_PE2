document.getElementById('btn3').addEventListener('click', function mostrarmensaje(){
    const container=document.createElement('div');
    const note = document.getElementById('enviarMensaje').value;
    container.textContent=note;
    conversacion.classList.add('colormsg1')
    document.getElementById('conversacion').appendChild(container)
});

function ocultar(){
    chat.classList.add('oculto')
}

function mostrar(){
    chat.classList.remove('oculto')
}

document.getElementById('enviarMensaje').addEventListener('keydown', function comprobarEnter(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
    mostrarmensaje();
    }
});