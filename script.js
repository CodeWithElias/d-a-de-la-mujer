function mostrarImagenes() {
    var imagenIzquierda = document.getElementById('imagenIzquierda');
    var imagenDerecha = document.getElementById('imagenDerecha');

    imagenIzquierda.style.display = 'block';
    imagenDerecha.style.display = 'block';
}

function mostrarCorazon() {
    var corazon = document.getElementById("corazon");
    var imagenes = [
        "flowers1.png",
        "flowers2.png",
        "flowers3.png",
        "flowers4.png",
        "flowers5.png",
        "flowers6.png"
        // Agrega más imágenes según sea necesario
    ];

    // Eliminamos el contenido actual del contenedor
    corazon.innerHTML = '';

    // Obtenemos la posición del contenedor del corazón
    var corazonRect = corazon.getBoundingClientRect();
    var corazonTop = corazonRect.top;
    var corazonLeft = corazonRect.left;

    // Obtenemos la posición del título y la frase
    var titulo = document.querySelector("h1");
    var frase = document.querySelector(".frase");

   // Obtenemos el centro del título y la frase
var tituloRect = titulo.getBoundingClientRect();
var tituloCenterX = tituloRect.left + tituloRect.width / 2 - corazonLeft;
var tituloCenterY = tituloRect.top + tituloRect.height / 2 - corazonTop;

var fraseRect = frase.getBoundingClientRect();
var fraseCenterX = fraseRect.left + fraseRect.width / 2 - corazonLeft;
var fraseCenterY = fraseRect.top + fraseRect.height / 2 - corazonTop;

// Ajustamos la posición del centro del círculo
var radio = 330;
var centroX = (tituloCenterX + fraseCenterX) / 2-50;
var centroY = (tituloCenterY + fraseCenterY) / 2-50;

    // Definimos la cantidad de imágenes a distribuir
    var cantidadImagenes = 30;
    var anguloIncremento = (2 * Math.PI) / cantidadImagenes;
    var anguloActual = 0;

    function agregarImagen(indice) {
        setTimeout(function() {
            var img = document.createElement("img");
            img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
            img.style.width = "100px"; // Tamaño de las imágenes
            img.style.height = "100px"; // Tamaño de las imágenes
            img.style.position = "absolute";

            var posX = centroX + Math.cos(anguloActual) * radio;
            var posY = centroY + Math.sin(anguloActual) * radio;

            img.style.left = posX + "px";
            img.style.top = posY + "px";

            corazon.appendChild(img);

            // Incrementamos el ángulo para la próxima imagen
            anguloActual += anguloIncremento;

            if (indice < cantidadImagenes - 1) {
                agregarImagen(indice + 1);
            }
        }, 100 * indice); // Cambiar el valor para ajustar el tiempo entre imágenes
    }

    agregarImagen(0);
}
