const imgsRecursivasHTML = document.getElementById('imgsRecursivas');

/**
 * Menú para saber qué opción se elige del filtro de imágenes recursivas.
 */
const menuImgsRecursivas = () => {
    imgsRecursivasHTML.addEventListener('click', () => {
        const opcion = parseInt(prompt(`Ingrese la opción que desea:
        1. Imágenes recursivas en blanco y negro.
        2. Imágenes recursivas a color. `));

        if(opcion === 1) imgRecursivaBN();
        else if(opcion === 2) imgRecursivaColor();
        else alert('Opción debe de ser 1 o 2, vuelva a intentarlo.');
    })
}