// Simulando una lista de prácticas para el estudiante
const practicas = [
    { empresa: "Empresa A", duracion: "3 meses" },
    { empresa: "Empresa B", duracion: "4 meses" },
    { empresa: "Empresa C", duracion: "2 meses" }
];

document.addEventListener('DOMContentLoaded', () => {
    const listaPracticas = document.getElementById('lista-practicas');

    practicas.forEach(practica => {
        const item = document.createElement('li');
        item.innerText = `Práctica en: ${practica.empresa}, Duración: ${practica.duracion}`;
        listaPracticas.appendChild(item);
    });
});

function cerrarSesion() {
    // Redirigir al inicio de sesión
    window.location.href = 'home.html';
}
