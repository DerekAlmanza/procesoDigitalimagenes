// id's para abrir imagenes
const archivo = document.getElementById('archivo');
const elegirImagenBoton = document.getElementById('elegirImagenBoton');
const guardarImagenBoton = document.getElementById('guardarImagen');
const imagenesHTML = document.getElementById('imagenes');

// id's para imagenes - canvas
const imgInsertada = document.getElementById('imgInsertada');
const imgEditada = document.getElementById('imgEditada');
const contextoEditado = imgEditada.getContext("2d");

// id's de botones 
const mosaicoBoton =document.getElementById('mosaico');

/**
 * Función auxiliar para dibujar el Canvas de una imagen
 * @param imagen objetoHTML recibido para dibujar la imagen con Canvas 
 */
const generarCanvas = (imagen) => {
    contextoEditado.drawImage(imagen,0,0,imgEditada.width,imgEditada.height);
}

/**
 * Función encargada de elegir la imagen del sistema de archivos locales
 * y plasmarla en la página, tanto la imagen original como la editada.
 */
const elegirImagen = () => {
    elegirImagenBoton.addEventListener('click', () => {

        archivo.addEventListener('change', (evento) => {
            const imagenes = evento.target.files // Varios archivos
            const fragmento = document.createDocumentFragment();
            for (const imagen of imagenes) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(imagen);
                const img = document.createElement('img');
                img.className += 'imagen';
                fileReader.addEventListener('load', (evento) => {
                    img.setAttribute('src', evento.target.result);
                })
                fragmento.appendChild(img);
            }
            imgInsertada.appendChild(fragmento);
        })

        archivo.addEventListener('change', (evento) => {
            const imagenes = evento.target.files // Varios archivos
            const fragmento = document.createDocumentFragment();
            for (const imagen of imagenes) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(imagen);
                const img = document.createElement('img')
                fileReader.addEventListener('load', (evento) => {
                    img.setAttribute('src', evento.target.result); 
                    generarCanvas(img);
                    if(filtroGris()) console.log('xd');
                    if(cambiarBrillo()) console.log('xd');
                    if(mosaico()) console.log('xd');
                    if(guardarImagen()) console.log('xd');
                })
                fragmento.appendChild(img);
            }
            imgEditada.appendChild(fragmento);
        })
        archivo.click();
    })
}

/**
 * Función encargada de guardar la imagen ya editada.
 */
const guardarImagen = () => {
    guardarImagenBoton.addEventListener('click', () => {
        var url = imgEditada.toDataURL();
        guardarImagenBoton.setAttribute( 'href', url );
        guardarImagenBoton.setAttribute( 'download', 'img_editada');
    })
}

const mosaico = () => {
    mosaicoBoton.addEventListener('click', (evento) => {
        console.log('clickeaste para mosaico');
    })
}

elegirImagen();

