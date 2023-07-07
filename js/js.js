'use strict'
window.addEventListener('load', ()=>{
    let boton = document.querySelector('.contenedor__btn');
    let contenedor = document.querySelector('.form__email');
    boton.addEventListener('click',()=>{
        contenedor.style.display = 'block';
    })
    let boton_form = document.querySelector('.contenedor__form__btn');
    boton_form.addEventListener('click',()=>{
        contenedor.style.display = 'none';
    });
});