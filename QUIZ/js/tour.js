var panorama1 = new PANOLENS.ImagePanorama('imagenes/panoramastudio.jpg');
//duracion del infospot para que no desaparezca en la panoramica
var duration = 1000;

var viewer = new PANOLENS.Viewer({
    container: document.querySelector('#panorama-container'),
});



//declaracion de variables infospot con radio 50 
//la instruccion final es referente al icono que va aparecer Arrow, Info
//link de iconos: https://pchen66.github.io/panolens.js/docs/module-DataImage.html
var infospot1_1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

//ubicacion de las zonas infospot XYZ
infospot1_1.position.set(381 ,-153 , -500);
infospot1_2.position.set(500 ,-141 , -58);
infospot1_3.position.set(-500 ,-31 , -492);
infospot1_4.position.set(-145, 51, 500);
infospot1_5.position.set(-288 ,94 , -500);
infospot1_6.position.set(-500 ,-46 , -15);
infospot1_7.position.set(188 ,-333 , 500);
infospot1_8.position.set(-69 ,-232 , 500);
infospot1_9.position.set(-500 ,-118 , -319);
infospot1_10.position.set(105 ,-166 , -500);


//agregar las zonas infospot
panorama1.add(infospot1_1);
panorama1.add(infospot1_2);
panorama1.add(infospot1_3);
panorama1.add(infospot1_4);
panorama1.add(infospot1_5);
panorama1.add(infospot1_6);
panorama1.add(infospot1_7);
panorama1.add(infospot1_8);
panorama1.add(infospot1_9);
panorama1.add(infospot1_10);


//contenido de los infospot1
infospot1_1.addHoverText('Bossa Nova', -10);
infospot1_1.element.innerHTML = '<div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 10px; font-size: 10px; width: 190px;">Bossa Nova</div>';
// Cambiar el color del Infospot inicial
//infospot1_1.material.color.set(0x1e1595);
panorama1.add(infospot1_1);

//contenido de los infospot2
infospot1_2.addHoverText('Visite la panoramica #3', -10);
infospot1_2.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 200px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
           A finales de los años 50, en los barrios de clase media de Río de Janeiro, nació el bossa nova. El término, que significa "nueva ola", se utilizó para describir un estilo musical que fusionaba la samba brasileña con el jazz estadounidense. Fue un momento clave en la música brasileña que redefiniría el panorama musical mundial.
        </div>
    </div>
`;
panorama1.add(infospot1_2);
infospot1_2.element.style.pointerEvents = "none"; 
infospot1_2.element.style.zIndex = 10;  





//contenido de los infospot3
infospot1_3.addHoverText('Visite la panoramica #3', -10);
infospot1_3.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 600px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
            João Gilberto, considerado uno de los padres fundadores del bossa nova, revolucionó la música brasileña con su forma única de tocar la guitarra. Su estilo de rasgueo suave y delicado, junto con su voz susurrante, fue clave para el desarrollo del género.
            <img src="imagenes/2.jpg" alt="Descripción de la imagen" style="width: 200px; height: 200px; margin-bottom: 10px;" />
        </div>
    </div>
`;
panorama1.add(infospot1_3);
infospot1_3.element.style.pointerEvents = "none"; 
infospot1_3.element.style.zIndex = 10;  

//contenido de los infospot4
infospot1_4.addHoverText('Visite la panoramica #3', -10);
infospot1_4.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 600px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
            Tom Jobim, compositor y pianista, jugó un papel esencial en la popularización del bossa nova fuera de Brasil. Su famosa composición "Garota de Ipanema" se convirtió en un éxito internacional y es uno de los estándares más reconocidos del género.
            <img src="imagenes/1.jpeg" alt="Descripción de la imagen" style="width: 200px; height: 200px; margin-bottom: 10px;" />
        </div>
    </div>
`;
panorama1.add(infospot1_4);
infospot1_4.element.style.pointerEvents = "none"; 
infospot1_4.element.style.zIndex = 10;  

//contenido de los infospot5
infospot1_5.addHoverText('Visite la panoramica #3', -10);
infospot1_5.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 200px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
           El bossa nova tiene sus raíces en el jazz, particularmente en la armonía y las estructuras complejas utilizadas en sus composiciones. Músicos como Stan Getz contribuyeron a la globalización del género, fusionando el jazz con el sonido suave del bossa nova.
        </div>
    </div>
`;
panorama1.add(infospot1_5);
infospot1_5.element.style.pointerEvents = "none"; 
infospot1_5.element.style.zIndex = 10;  

//contenido de los infospot6
infospot1_6.addHoverText('Visite la panoramica #1', -10);

// Crear un iframe para incrustar el video de YouTube
infospot1_6.element.innerHTML = `
    <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 60px; font-size: 16px; width: 700px; display: flex; justify-content: center; align-items: center;">
        <iframe width="1000" height="415" src="https://www.youtube.com/embed/Gv6QsYB58cQ?si=Pk3i9SD9PEXCqkDT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
`;
panorama1.add(infospot1_6);


//contenido de los infospot7
infospot1_7.addHoverText('Visite la panoramica #3', -10);
infospot1_7.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 600px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
           El poeta y letrista Vinicius de Moraes fue otro de los grandes impulsores del bossa nova. Colaboró estrechamente con Jobim y otros músicos para crear algunas de las canciones más emblemáticas del género, como "Desafinado" y "Chega de Saudade". <br>
           </div>
    </div>
`;
panorama1.add(infospot1_7);
infospot1_7.element.style.pointerEvents = "none"; 
infospot1_7.element.style.zIndex = 10;  

//contenido de los infospot8
infospot1_8.addHoverText('Visite la panoramica #3', -10);
infospot1_8.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 200px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
           El bossa nova no solo cambió la música brasileña, sino que también influyó en la cultura global. La "bossa nova cool" se asoció con una actitud bohemia y sofisticada, convirtiéndose en la banda sonora de la vida en las playas de Ipanema y Copacabana.
        </div>
    </div>
`;
panorama1.add(infospot1_8);
infospot1_8.element.style.pointerEvents = "none"; 
infospot1_8.element.style.zIndex = 10;  

//contenido de los infospot9
infospot1_9.addHoverText('Visite la panoramica #3', -10);
infospot1_9.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 200px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
           A diferencia de la samba tradicional, que es más animada y energética, el bossa nova se caracteriza por su suavidad y melancolía. La música transmite un sentimiento de calma y serenidad, reflejando la belleza de las playas brasileñas y la vida cotidiana en Brasil.
        </div>
    </div>
`;
panorama1.add(infospot1_9);
infospot1_9.element.style.pointerEvents = "none"; 
infospot1_9.element.style.zIndex = 10;  


//contenido de los infospot10
infospot1_10.addHoverText('Visite la panoramica #3', -10);
infospot1_10.element.innerHTML = `
    <div style="position: relative; z-index: 1; display: flex; justify-content: center; align-items: center;">
        <div style="background-color: rgba(0, 0, 139, 0.64); color:#fff; border-radius: 5px; padding: 15px 20px; font-size: 14px; width: 200px; text-align: center; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
           Aunque el auge del bossa nova fue relativamente breve, su influencia perdura hasta hoy. En las décadas posteriores, el género experimentó un renacimiento, con artistas contemporáneos como Bebel Gilberto y Celso Fonseca revitalizando el estilo y manteniendo su relevancia en la música global.
        </div>
    </div>
`;
panorama1.add(infospot1_9);
infospot1_10.element.style.pointerEvents = "none"; 
infospot1_10.element.style.zIndex = 10;  




// Cambia el tamaño del Infospot (por ejemplo, al 50% del tamaño original)
//infospot1_4.scale = 3;


// desplazamiento de los infospots
infospot1_1.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_2
    viewer.tweenControlCenter(infospot1_2.position);
});
infospot1_2.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_3
    viewer.tweenControlCenter(infospot1_3.position);
});
infospot1_3.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_4
    viewer.tweenControlCenter(infospot1_4.position);
});
infospot1_4.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_5.position);
});
infospot1_5.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_7.position);
});
infospot1_7.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_8.position);
});
infospot1_8.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_9.position);
});
infospot1_9.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_10.position);
});
infospot1_10.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_6.position);
});





//permiter mostrar/ocultar  la panoramica
viewer.add(panorama1);