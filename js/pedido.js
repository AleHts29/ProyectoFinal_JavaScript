const carro = new Carrito();

const carrito = $('#carrito');

// Contiene el catalogo de productos
const productos = $('#lista-productos');

// Accedemos a la lista de productos(tbody), donde vamos a insertar los elementos HTML
const listaProductos = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = $('#vaciar-carrito');

const procesarPedidoBtn = $('#procesar-pedido');


cargarEventos()


function cargarEventos(){
    productos.click((e)=>{carro.comprarProducto(e)});

    carrito.click((e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.click( (e) => {carro.vaciarCarrito(e)});

    $(document).ready(carro.leerLocalStorage());

    procesarPedidoBtn.click( (e)=>{carro.procesarPedido(e)});
}