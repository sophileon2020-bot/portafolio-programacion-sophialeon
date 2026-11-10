// Array que almacena los estudiantes
let estudiantes = [];

// Elementos HTML
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let grado = document.getElementById("grado");
let nota = document.getElementById("nota");
let tabla = document.getElementById("tablaEstudiantes");
let btnLimpiar = document.getElementById("btnLimpiar");

// Evento submit del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar los valores
    let nombreValor = nombre.value.trim();
    let gradoValor = grado.value.trim();
    let notaValor = Number(nota.value);

    // Validaciones
    if (nombreValor === "" || gradoValor === "" || nota.value === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (notaValor < 0 || notaValor > 5) {
        alert("La nota debe estar entre 0 y 5.");
        return;
    }

    // Crear el objeto estudiante
    let estudiante = {
        nombre: nombreValor,
        grado: gradoValor,
        nota: notaValor
    };

    // Agregar el objeto al array
    estudiantes.push(estudiante);

    mostrarEstudiantes();
    limpiarFormulario();
});

// Mostrar los estudiantes en la tabla
function mostrarEstudiantes() {

    tabla.innerHTML = "";

    estudiantes.forEach(function (estudiante, indice) {

        let fila = document.createElement("tr");

        let aprobado = estudiante.nota >= 3;
        let estado = aprobado ? "Aprobado" : "Reprobado";
        let clase = aprobado ? "aprobado" : "reprobado";

        fila.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.grado}</td>
            <td>${estudiante.nota}</td>
            <td class="${clase}">${estado}</td>
            <td>
                <button onclick="eliminarEstudiante(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

// Eliminar un estudiante por su posición en el array
function eliminarEstudiante(indice) {
    estudiantes.splice(indice, 1);
    mostrarEstudiantes();
}

// Limpiar los campos del formulario
function limpiarFormulario() {
    nombre.value = "";
    grado.value = "";
    nota.value = "";
    nombre.focus();
}

// Limpiar todos los registros
btnLimpiar.addEventListener("click", function () {
    estudiantes = [];
    mostrarEstudiantes();
});
