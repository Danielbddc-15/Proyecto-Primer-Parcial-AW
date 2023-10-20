// Simulación de datos de prácticas
const practicasAsignadas = [];

// Función para cargar las prácticas asignadas en la lista
function cargarPracticas() {
    const listaPracticas = document.getElementById('lista-practicas');
    const storedPracticas = JSON.parse(localStorage.getItem('practicas'));

    if (storedPracticas) {
        practicasAsignadas.push(...storedPracticas);
    }

    practicasAsignadas.forEach(practica => {
        const fila = document.createElement('tr');
        fila.dataset.nombreEstudiante = practica.alumno;

        const celdas = [
            practica.alumno,
            practica.duracion,
            practica.empresa,
            practica.encargado,
            practica.contacto,
            '<button onclick="eliminarPractica(event)">Eliminar</button>'
        ];

        celdas.forEach(texto => {
            const celda = document.createElement('td');
            celda.innerHTML = texto;
            fila.appendChild(celda);
        });

        listaPracticas.appendChild(fila);
    });
}
function agregarPractica(event) {
    event.preventDefault();

    const nombreEstudiante = document.getElementById('nombre-estudiante').value;
    const duracion = document.getElementById('duracion').value;
    const empresa = document.getElementById('empresa').value;
    const encargado = document.getElementById('encargado').value;
    const contacto = document.getElementById('contacto').value;

    practicasAsignadas.push({
        alumno: nombreEstudiante,
        empresa: empresa,
        estado: "En Progreso",
        duracion: duracion,
        encargado: encargado,
        contacto: contacto
    });

    const listaPracticas = document.getElementById('lista-practicas');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${nombreEstudiante}</td>
        <td>${duracion}</td>
        <td>${empresa}</td>
        <td>${encargado}</td>
        <td>${contacto}</td>
        <td>
            <button onclick="eliminarPractica(event)">Eliminar</button>
        </td>
    `;

    listaPracticas.appendChild(fila);

    document.getElementById('nombre-estudiante').value = '';
    document.getElementById('duracion').value = '';
    document.getElementById('empresa').value = '';
    document.getElementById('encargado').value = '';
    document.getElementById('contacto').value = '';

    if (practicasAsignadas.length === 1) {
        // Mostrar los encabezados si es la primera práctica
        document.getElementById('tabla-practicas').querySelector('thead').style.display = 'table-header-group';
    }
        // Si ya no hay prácticas, ocultar los encabezados
        if (practicasAsignadas.length === 0) {
            document.getElementById('tabla-practicas').querySelector('thead').style.display = 'none';
        }

        localStorage.setItem('practicas', JSON.stringify(practicasAsignadas));
}


function eliminarPractica(event) {
    const botonEliminar = event.target;
    const fila = botonEliminar.parentElement.parentElement;
    const nombreEstudiante = fila.dataset.nombreEstudiante;

    practicasAsignadas.forEach((practica, index) => {
        if (practica.alumno === nombreEstudiante) {
            practicasAsignadas.splice(index, 1);
        }
    });

    fila.remove();

    localStorage.setItem('practicas', JSON.stringify(practicasAsignadas));
}

function retrocederAInicio() {
    window.location.href = 'inicio_docente.html';
}

function cerrarSesion() {
    window.location.href = 'home.html';
}

window.onload = cargarPracticas;