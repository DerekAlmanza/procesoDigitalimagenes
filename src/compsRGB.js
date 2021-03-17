const rgb = document.getElementById('rgb');

const compsRGB = () => {
    rgb.addEventListener('click', () => {

        // Leemos info
        const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
        const arregloRGB = imgInfo.data;

        // Asignar valores RGB
        var modificarRojo = parseInt(prompt('Ingrese un valor Rojo de 0 a 255 que le quiere dar a la imagen'));
        var modificarVerde = parseInt(prompt('Ingrese un valor Verde de 0 a 255 que le quiere dar a la imagen'));
        var modificarAzul = parseInt(prompt('Ingrese un valor Azul de 0 a 255 que le quiere dar a la imagen'));

        // Recorremos imagen
        for(var i = 0; i < arregloRGB.length; i += 4) {
            arregloRGB[i] += modificarRojo;
            arregloRGB[i + 1] += modificarVerde;
            arregloRGB[i + 2] += modificarAzul;
        }
        contextoEditado.putImageData(imgInfo,0,0);
    })
}