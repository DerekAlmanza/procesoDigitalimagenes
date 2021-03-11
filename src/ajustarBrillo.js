const brilloBoton = document.getElementById('brillo');
const botonesFiltros = document.getElementById('botonesFiltros');
const inputRango = document.getElementById('inputRango');

const cambiarBrillo = () => {
    brilloBoton.addEventListener('click', () => {
        // Creamos elemento deslizante
        const barraDeslizante = document.createElement('input');
        barraDeslizante.setAttribute('type', 'range');
        barraDeslizante.setAttribute('min', '-255');
        barraDeslizante.setAttribute('max', '255');
        barraDeslizante.classList.add('barraDeslizante')
        botonesFiltros.children[3].insertAdjacentElement('beforeend',barraDeslizante);

        barraDeslizante.addEventListener('change', () => {

            // Asignamos el valor del slider a la variable
            const valorBrillo = parseInt(barraDeslizante.value);

            // Leemos info
            const imgInfo = contextoEditado.getImageData(0,0,imgEditada.width,imgEditada.height);
            const arregloRGB = imgInfo.data;

            // Recorremos imagen
            for(var i = 0; i < arregloRGB.length; i += 4) {
                // var rojo = arregloRGB[i];
                // var verde = arregloRGB[i+1];
                // var azul = arregloRGB[i+2];
                if(arregloRGB[i]+valorBrillo > 255) arregloRGB[i] = 255;
                if(arregloRGB[i+1]+valorBrillo > 255) arregloRGB[i+1] = 255;
                if(arregloRGB[i+2]+valorBrillo > 255) arregloRGB[i+2] = 255;

                if(arregloRGB[i]+valorBrillo < 0) arregloRGB[i] = 0;
                if(arregloRGB[i+1]+valorBrillo < 0) arregloRGB[i+1] = 0;
                if(arregloRGB[i+2]+valorBrillo < 0) arregloRGB[i+2] = 0;
                
                arregloRGB[i]= arregloRGB[i] + valorBrillo;
                arregloRGB[i+1]= arregloRGB[i+1] + valorBrillo;
                arregloRGB[i+2]= arregloRGB[i+2] + valorBrillo;

                 
            }
            contextoEditado.putImageData(imgInfo,0,0);
        })
    })
}