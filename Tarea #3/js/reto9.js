document.addEventListener('DOMContentLoaded', function () {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cedula = cedulaInput.value.trim();
        
        if (cedula.length === 0) { // Corregido "lenght" a "length"
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa una cédula antes de buscar'
            });
        } else if (isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        } else if (validarCedula(cedula)) {
            mostrarInformacionEmpleado(cedula);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        }
    });

    function validarCedula(cedula) {
        return /^\d{9}$/.test(cedula);
    }

    function mostrarInformacionEmpleado(cedula) {
        const empleados = {
            '109110338': {nombre: 'Pedro Miranda', jornada: 'Diurna', salario: '$1500', foto: 'usuario1.jpg', descripcion: 'Diseñador Web'},
            '209110338': {nombre: 'Karla Castro', jornada: 'Nocturna', salario: '$1200', foto: 'usuario2.jpg', descripcion: 'Diseñadora UX-UI'},
            '309110338': {nombre: 'Oscar Soto', jornada: 'Diurna', salario: '$1600', foto: 'usuario3.jpg', descripcion: 'Programador Web'},
            '409110338': {nombre: 'Rebeca Suarez', jornada: 'Mixta', salario: '$1400', foto: 'usuario4.jpg', descripcion: 'Diseñadora gráfica'},
            '509110338': {nombre: 'Pablo Coto', jornada: 'Nocturna', salario: '$1300', foto: 'usuario5.jpg', descripcion: 'Analista de sistemas'}
        };
        
        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no existe'
            });
        }
    }

    function mostrarResultado(empleado) {
        resultadoContainer.innerHTML = `
            <div class="card text-center" style="width: 20rem;">
                <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
                <div class="card-body">
                    <h5 class="card-title">${empleado.nombre}</h5>
                    <p class="card-text">Jornada: ${empleado.jornada}</p>
                    <p class="card-text">Salario: ${empleado.salario}</p>
                    <p class="card-text">Descripción: ${empleado.descripcion}</p>
                </div>
            </div>
        `;
    }
});
