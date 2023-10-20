function mostrarLogin(tipo) {
    var modal = document.getElementById('login-modal');
    modal.classList.add('active');
    
    if (tipo === 'estudiantes') {
        document.getElementById('estudiantes-login').style.display = 'block';
        document.getElementById('docentes-login').style.display = 'none';
    } else if (tipo === 'docentes') {
        document.getElementById('estudiantes-login').style.display = 'none';
        document.getElementById('docentes-login').style.display = 'block';
    }
}

function cancelar() {
    window.location.href = 'home.html'; // Cambia 'index.html' por la ruta de tu página de inicio
}

function ocultarLogin() {
    var modal = document.getElementById('login-modal');
    modal.classList.remove('active');
}


function validarEstudiante() {
    const username = document.getElementById('estudiante-username').value;
    const password = document.getElementById('estudiante-password').value;

    // Realizar validaciones aquí si es necesario...

    // Redirigir a la página correspondiente
    window.location.href = 'inicio_estudiante.html';
    return false; // Esto evita que el formulario se envíe de manera convencional
}

function validarDocente() {
    const username = document.getElementById('docente-username').value;
    const password = document.getElementById('docente-password').value;

    // Realizar validaciones aquí si es necesario...

    // Redirigir a la página correspondiente
    window.location.href = 'inicio_docente.html';
    return false; // Esto evita que el formulario se envíe de manera convencional
}
