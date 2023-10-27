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
    window.location.href = 'home.html'; 
}

function ocultarLogin() {
    var modal = document.getElementById('login-modal');
    modal.classList.remove('active');
}

function validarCorreo(correo) {
    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}


function validarEstudiante() {
    const username = document.getElementById('estudiante-username').value;
    const password = document.getElementById('estudiante-password').value;

    const errorUsernameE = document.getElementById("error-usernameE");
    const errorPasswordE = document.getElementById("error-passwordE");

    // Validar correo
    if (!validarCorreo(username)) {
        errorUsernameE.textContent = "Correo electrónico inválido";
        errorUsernameE.style.display = "block";
        return false;
    } else {
        errorUsernameE.textContent = "";
        errorUsernameE.style.display = "none";
    }

    // Validar contraseña
    if (password.trim() === '') {
        errorPasswordE.textContent = "La contraseña no puede estar en blanco";
        errorPasswordE.style.display = "block";
        return false;
    } else {
        errorPasswordE.textContent = "";
        errorPasswordE.style.display = "none";
    }

    // Si los datos son correctos, redirigir a la página correspondiente
    window.location.href = 'inicio_estudiante.html';
    return false;
}


function validarDocente() {
    const username = document.getElementById('docente-username').value;
    const password = document.getElementById('docente-password').value;

    const errorUsername = document.getElementById("error-username");
    const errorPassword = document.getElementById("error-password");

    // Validar correo
    if (!validarCorreo(username)) {
        errorUsername.textContent = "Correo electrónico inválido";
        errorUsername.style.display = "block";
        return false;
    } else {
        errorUsername.textContent = "";
        errorUsername.style.display = "none";
    }

    // Validar contraseña
    if (password.trim() === '') {
        errorPassword.textContent = "La contraseña no puede estar en blanco";
        errorPassword.style.display = "block";
        return false;
    } else {
        errorPassword.textContent = "";
        errorPassword.style.display = "none";
    }

    // Si los datos son correctos, redirigir a la página correspondiente
    window.location.href = 'inicio_docente.html';
    return false;
}
