
const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const section = document.querySelector("section");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        section.classList.add("min-section");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    section.classList.toggle("min-section");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        const botonComprar = document.querySelectorAll('.boton-comprar');

        botonComprar.forEach(boton => {
            boton.addEventListener('click', function () {
                const contadorCompras = document.querySelector('.compras');
                    
                let contadorActual = parseInt(contadorCompras.dataset.contador) || 0;

                contadorActual++;

                contadorCompras.textContent = `Tus Compras (${contadorActual})`;
                contadorCompras.dataset.contador = contadorActual;
            });
        });
    });
