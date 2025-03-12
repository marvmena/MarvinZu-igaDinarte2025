window.onload = function () {
    document.getElementById("modelo").onchange = function(e) {
        a = e.target.value;
        let imagen = "";

        if (a == "iPhone 13") {
            imagen = "imagenes/reto5/iphone13.webp";
        } else if (a == "iPhone 14") {
            imagen = "imagenes/reto5/iphone14.webp";
        } else if (a == "iPhone 15") {
            imagen = "imagenes/reto5/iphone15.webp";
        } else if (a == "iPhone 16") {
            imagen = "imagenes/reto5/iphone16.webp";
        }

        document.getElementById("imagen").src = imagen;
    };

    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    };
};

function calcular() {
    if (document.getElementById("modelo").value == "Seleccione el teléfono:") {
        Swal.fire({
            icon: "info",
            title: "Atención",
            text: "Seleccionar el teléfono y la versión",
        });
        return;
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
        Swal.fire({
            icon: "info",
            title: "Atención",
            text: "Seleccionar el teléfono y la versión",
        });
        return;
    }

    let imagen = "";
    switch (a) {
        case "iPhone 13":
            imagen = "imagenes/reto5/iphone13.webp";
            montoCuota = n == "Normal" ? 430000 : 650000;
            break;
        case "iPhone 14":
            imagen = "imagenes/reto5/iphone14.webp";
            montoCuota = n == "Normal" ? 500000 : 750000;
            break;
        case "iPhone 15":
            imagen = "imagenes/reto5/iphone15.webp";
            montoCuota = n == "Normal" ? 550000 : 850000;
            break;
        case "iPhone 16":
            imagen = "imagenes/reto5/iphone16.webp";
            montoCuota = n == "Normal" ? 650000 : 950000;
            break;
    }

    Swal.fire({
        imageUrl: imagen,
        html: "<p>Mira la cuota mensual del " + n +
        "<br><br> <strong>Cuota mensual</strong> ₡" + montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Teléfono " + a,
    });
}
