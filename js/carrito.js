//accedo al archivo .JSON
const fetchData = async()=>{
    try {
        const levantarDatos = await fetch('./data/data2.json');
        const data = await levantarDatos.json();
        htmlCards(data)
    } catch (error) {
        console.log(error)
    }
}



//  Funsion para pintar las cards en el html y se disminuye el reflow
const htmlCards = data =>{
    // console.log(data)
    data.forEach(producto =>{
        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('p').textContent = ` ${producto.price}`;
        templateCard.querySelector('img').setAttribute("src", producto.image);
        templateCard.querySelector('.btn-outline-dark').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        dataFragment.appendChild(clone);
    })
    cards.appendChild(dataFragment);
}


// Funsion agregar a carrito. Se captura el evento del boton comprar.
const addCarrito = e => {
    // console.log(e.target.classList.contains('btn-outline-dark')); //se obtiene un true
    if (e.target.classList.contains('btn-outline-dark')){
        // console.log(e.target.parentElement.parentElement)
        setCarrito(e.target.parentElement.parentElement)
    }
    // Evito que se propaguen los eventos del contenedor cards ya que se heredan del padre
    e.stopPropagation();
}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-outline-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        price: objeto.querySelector('p').textContent,
        img: objeto.querySelector('img').src,
        amount: 1
    }
    // Aumento de la cantidad de productos, si existe el producto lo incremento
    if(carrito2.hasOwnProperty(producto.id)){
        producto.amount = carrito2[producto.id].amount+1;
    }
    carrito2[producto.id] = {...producto} //Spread Operator - hacemos una copia de producto
    pintarCarrito();
}

// funcion pintar carrito
const pintarCarrito = () =>{
    // console.log(carrito2)
    // Limpio el html
    items.innerHTML = '';
    Object.values(carrito2).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title;
        templateCarrito.querySelectorAll('td')[1].textContent = producto.amount;
        templateCarrito.querySelector('span').textContent = (producto.amount * producto.price).toFixed(2);
        templateCarrito.querySelector('.btn-up').dataset.id = producto.id;
        templateCarrito.querySelector('.btn-down').dataset.id = producto.id;
        

        const clone = templateCarrito.cloneNode(true);
        dataFragment.appendChild(clone);
    })
    items.appendChild(dataFragment);

    pintarFooter();

    // LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito2))
}

// Funcion Pintar footer - Pinta los valores totales de productos y precios
const pintarFooter = () => {
    footer.innerHTML = '';
    let promotions = 1;
    let nPriceDecimal;
    if(Object.keys(carrito2).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5"> Carrito vacio - Agregar compras</th>
        `
        return;
    }

    const nProducts = Object.values(carrito2).reduce((totalProducts, {amount}) => totalProducts + amount,0);
    let nPrice = Object.values(carrito2).reduce((totalProducts, {amount, price}) => totalProducts + amount*price,0);
    

    if(nProducts > promotions){
        nPriceDecimal = descuentos(nPrice);
    }
    else{
        nPriceDecimal = nPrice.toFixed(2);
    }
    
    
    // Pintamos en el HTML
    templateFooter.querySelectorAll('td')[0].textContent = nProducts;
    templateFooter.querySelector('span').textContent = nPriceDecimal;

    const clone = templateFooter.cloneNode(true);
    dataFragment.appendChild(clone);
    footer.appendChild(dataFragment);

    // Vaciar carrito
    const btnVaciar = document.getElementById('vaciar-carrito2');
    btnVaciar.addEventListener('click', () => {
        carrito2 = {};
        pintarCarrito();
    })

    // Procesar compra
    const btnComprar = document.getElementById('procesar-pedido');
    btnComprar.addEventListener('click', (e) => {
        e.preventDefault();
        location.href = "pages/formulario.html";
    })
}

// Decuentos del 25%
const descuentos = e =>{
    let nDescuento = 0.25;
    let nPriceDescuento = e * nDescuento;

    return (e - nPriceDescuento).toFixed(2);
}

// Funcion botones aumentar/disminuor cantidad de productos
const btnProducts = e => {
    // console.log(e.target)
    if(e.target.classList.contains('btn-up')){
        // console.log(carrito2[e.target.dataset.id])
        const producto = carrito2[e.target.dataset.id];
        producto.amount++;
        carrito2[e.target.dataset.id] = {...producto};
        pintarCarrito();
    }
    if(e.target.classList.contains('btn-down')){
        // console.log(carrito2[e.target.dataset.id])
        const producto = carrito2[e.target.dataset.id];
        producto.amount--;
            if(producto.amount === 0){
                delete carrito2[e.target.dataset.id]
            }
        pintarCarrito();
    }
    e.stopPropagation();
}


// export default {}