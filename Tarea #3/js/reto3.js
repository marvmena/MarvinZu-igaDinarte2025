function menu () {
    let seleccion = document.getElementById('opciones').value;
    
    switch (seleccion) {
        case 'A':
            Swal.fire ({
                icon: "success",
                title: "Cartago, Costa Rica",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then (() => {
                window.location.href = "reto3.html";
            });
            return;
            // window.open("retrato.html", "_self");
        case  'B':
            Swal.fire({
                icon: "success",
                title: "Desamparados, Costa Rica",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3-2.html"
            });
            return;
            // window.open("boda.html", "_self");
        case  'C':
            Swal.fire({
                icon: "success",
                title: "Heredia, Costa Rica",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3-3.html"
            });
            return;
                // window.open("paisaje.html", "_self");
         case  'D':
                Swal.fire({
                    icon: "success",
                    title: "Lindora, Costa Rica",
                    text: "Un momento por favor...",
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    window.location.href = "reto3-4.html"
                });
                return;
                // window.open("paisaje.html", "_self");
            case  'E':
                Swal.fire({
                    icon: "success",
                    title: "Moravia, Costa Rica",
                    text: "Un momento por favor...",
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    window.location.href = "reto3-5.html"
                });
                return;
                // window.open("paisaje.html", "_self");
    }
}