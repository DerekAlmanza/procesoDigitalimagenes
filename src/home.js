// id's para abrir imagenes
const archivo = document.getElementById('archivo');
const elegirImagenBoton = document.getElementById('elegirImagenBoton');

// id's para imagenes
const imgInsertada = document.getElementById('imgInsertada');
const imgEditada = document.getElementById('imgEditada');
const contextoEditado = imgEditada.getContext("2d");

// id's de botones
const filtroGris = document.getElementById('filtroGris'); 
const color = document.getElementById('color');
const mosaico =document.getElementById('mosaico');
const brillo = document.getElementById('brillo');

// contexto1.fillRect(0,0,160,110);

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
                contextoEditado.drawImage(img,0,0,imgEditada.width,imgEditada.height);
            })
            fragmento.appendChild(img);
        }
        imgEditada.appendChild(fragmento);
    })
    archivo.click();
})


    



    
    

