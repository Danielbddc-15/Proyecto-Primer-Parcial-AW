function cargarPracticasEstudiante() {
    const tablaPracticas = document.querySelector('table tbody');

    const storedPracticas = JSON.parse(localStorage.getItem('practicas'));

    if (storedPracticas) {
        // Limpia la tabla antes de agregar las prácticas
        tablaPracticas.innerHTML = '';

        storedPracticas.forEach(practica => {
            const fila = document.createElement('tr');

            const celdas = [
                practica.alumno,
                practica.empresa,
                practica.estado,
                practica.duracion,
                practica.encargado,
                practica.contacto
            ];

            celdas.forEach(texto => {
                const celda = document.createElement('td');
                celda.textContent = texto;
                fila.appendChild(celda);
            });

            tablaPracticas.appendChild(fila);
        });
    }
}

window.onload = cargarPracticasEstudiante;