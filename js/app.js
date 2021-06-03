// import {} from "./carrito3.js";

// const carro = new Carrito ();

const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
// const procesarPedidoBtn = $('#procesar-pedido');

const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const dataFragment = document.createDocumentFragment();

// Almacena los objetos selecionados
let carrito2 = {}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();

    // Local storage
    if(localStorage.getItem('carrito')){
        carrito2 = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
})

//Event agregar al carrito
cards.addEventListener('click', e => {
    addCarrito(e);
})



// Evento botones aumentar/disminuor cantidad de productos
items.addEventListener('click', e => {
    btnProducts(e);
})
