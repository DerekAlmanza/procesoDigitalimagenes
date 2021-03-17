// ID's de botones
const brilloBoton = document.getElementById('brillo');
const botonesFiltros = document.getElementById('botonesFiltros');
const inputRango = document.getElementById('inputRango');

/**
 * Función encargada de ajustar el brillo por medio de un slider generado.
 */
const cambiarBrillo = () => {
    brilloBoton.addEventListener('click', () => {
        // Creamos elemento deslizante
        const barraDeslizante = document.createElement('input');
        barraDeslizante.setAttribute('type', 'range');
        barraDeslizante.setAttribute('min', '-143');
        barraDeslizante.setAttribute('max', '143');
        barraDeslizante.setAttribute('value', '0');
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
                
                arregloRGB[i] += valorBrillo;
                arregloRGB[i+1] += valorBrillo;
                arregloRGB[i+2] += valorBrillo;

            }
            console.log(barraDeslizante.value);
            contextoEditado.putImageData(imgInfo,0,0);
        })
    })
}