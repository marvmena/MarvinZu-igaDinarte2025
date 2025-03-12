const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const nota1 = document.getElementById('nota1').value.trim();
    const nota2 = document.getElementById('nota2').value.trim();
    const nota3 = document.getElementById('nota3').value.trim();

    if (!nombre || !apellido || !nota1 || !nota2 || !nota3) {
        window.Swal.fire({ // Asegurar que Swal está definido
            icon: "error",
            title: "Debe llenar todos los campos correctamente",
            text: "Por favor, complete todos los campos antes de continuar."
        });
        return;
    }

    const nota1Num = parseFloat(nota1);
    const nota2Num = parseFloat(nota2);
    const nota3Num = parseFloat(nota3);

    if (isNaN(nota1Num) || isNaN(nota2Num) || isNaN(nota3Num)) {
        window.Swal.fire({
            icon: "error",
            title: "Las notas deben ser números válidos",
            text: "Ingrese valores numéricos entre 0 y 100."
        });
        return;
    }

    const promedio = ((nota1Num + nota2Num + nota3Num) / 3).toFixed(2);
    estudiantes.push({ nombre, apellido, promedio });

    const selectEstudiantes = document.getElementById('listaEstudiantes');
    const option = document.createElement('option');
    option.value = `${nombre} ${apellido}`;
    option.text = `${nombre} ${apellido}`;
    selectEstudiantes.appendChild(option);

    limpiarDatos();

    window.Swal.fire({
        icon: "success",
        title: "Estudiante agregado",
        text: `El estudiante ${nombre} ${apellido} ha sido registrado con éxito.`
    });
}

function calcularPromedioSeleccionado() {
    const nombreSeleccionado = document.getElementById('listaEstudiantes').value;
    const resultado = document.getElementById('resultado');

    const estudiante = estudiantes.find(est => `${est.nombre} ${est.apellido}` === nombreSeleccionado);

    if (estudiante) {
        resultado.textContent = `El promedio de ${nombreSeleccionado} es: ${estudiante.promedio}`;
    } else {
        resultado.textContent = "Seleccione un estudiante válido.";
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}
