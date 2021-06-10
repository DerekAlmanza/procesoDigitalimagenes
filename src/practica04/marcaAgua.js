const marcaAguaBoton = document.getElementById('marcaAgua');
const formMarcaAgua = document.getElementById('formMarcaAgua');

const marcaAgua = () => {
    marcaAguaBoton.addEventListener('click', () => {
        formMarcaAgua.classList.remove('hide');
        console.log('xd');
    })
}