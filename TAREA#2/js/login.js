
// conexion con HTML usando el id btn-login y cargando la funcion llamada login
document.getElementById("btn-login").addEventListener("click", login);

// funcion que valida el login
function validation_alert(ptext) {
    swal.fire ({
        // icon: "error",
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
    });
}

// funcion login 
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    // declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    // identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    // Ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error.
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            // este es el texto que llebar el parametro de la funcion validacion_alert
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text); 
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    // validacion si los campos username y password son iguales 
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                // icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                // milisegundos equivalen a 5 seg
                timer: 5000,
                
            }).then(() => {
                window.location.href = "/inicio.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta";
            // carga la funcion de arriba
            validation_alert(text);
        }
    }
}