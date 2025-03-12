window.onload = function () {
    document.getElementById("output-img").innerHTML = '<img src= "imagenes/reto4/img-logo.png" class="img-fluid" alt="logo" />'

    document.getElementById("misses").onchange = function(e) {
        let n = e.target.value;

        let imagen = "<img src='imagenes/reto4/" + n + ".jpg' class=' img-thumbnail rounded' alt='Miss' />";

        let text = [
            "Pia Wurtzbach (Filipinas, 2015): Su victoria fue inolvidable porque el presentador Steve Harvey anunció el nombre equivocado al principio. Más allá de la controversia, Pia se convirtió en embajadora de causas sociales y de la lucha contra el VIH/SIDA.",
            "Catriona Gray (Filipinas, 2018): Catriona destacó por su impactante pasarela, especialmente su famoso 'Lava Walk'. Su carisma y preparación la convirtieron en una de las Miss Universo más queridas. Además, promovió la educación infantil en comunidades desfavorecidas de Filipinas y continúa siendo una figura influyente en la moda y el activismo social.",
            "Sheynnis Palacios (Nicaragua, 2023): Primera nicaragüense en ganar Miss Universo, Sheynnis ha sido un símbolo de inspiración y orgullo para su país. Como periodista y defensora de la salud mental, ha utilizado su plataforma para promover el bienestar emocional y la importancia del autocuidado.",
            "Harnaaz Sandhu (India, 2021): Se convirtió en la tercera india en ganar Miss Universo. Es defensora del empoderamiento femenino y la educación, además de tener una carrera en el cine y la moda.",
            "Zuleyka Rivera (Puerto Rico, 2006): Zuleyka ganó con tan solo 18 años y su vestido metálico ceñido se convirtió en uno de los más icónicos de la historia del certamen. Tras su reinado, se dedicó a la actuación y al modelaje. También es famosa por aparecer en el video de 'Despacito' de Luis Fonsi.",
            "Paulina Vega (Colombia, 2014): Paulina se destacó por su elegancia y seguridad en el escenario. Fue la segunda colombiana en ganar el certamen después de 57 años. Tras su reinado, trabajó en televisión y negocios, y se ha convertido en una exitosa empresaria y presentadora.",
        ];


         if (n > 0 && n <= text.length) {
            document.getElementById("output-img").innerHTML = imagen;
            document.getElementById("output-txt").innerHTML = text[n - 1];
        } else {
            document.getElementById("output-img").innerHTML = '<img src="imagenes/reto4/img-logo.png" class="img-fluid rounded" alt="logo" />';
            document.getElementById("output-txt").innerHTML = "Información no disponible";
        }
    };

    // Evento para limpiar la selección y restaurar la imagen y texto por defecto
    document.getElementById("btn-clean").onclick = function() {
        document.getElementById("output-img").innerHTML = '<img src="imagenes/reto4/img-logo.png"img-fluid rounded" alt="logo" />';
        document.getElementById("output-txt").innerHTML = "";

        // Restablecer el select al valor predeterminado
        document.getElementById("misses").selectedIndex = 0;
    }
}