


// Intro - bienvenida
let welcome = $(".pricing-header");
welcome.show(3000);

// Carts
$("#lista-productos").fadeIn(1600);
$("#lista-productos").delay(1250).fadeIn(100, function(){
    // $("#lista-productos").
    
    $("body").fadeIn(1000).css("background-color", "#c1d7d7");
    welcome.fadeIn(1000).css("color","#566573");
});

// formulario -falta validar que haga el slideUp solo cuando los campos esten llenos y sea info valida
$(".faIn-JQ").fadeIn(1000);
$("#btn-enviar").click(() => { 
    $(".faIn-JQ").slideUp("fast");
    $(".fadeTks-JQ").prepend(`
                        <h1>¡Gracias por su compra!</h1>
                    `).fadeIn(1000);
});


