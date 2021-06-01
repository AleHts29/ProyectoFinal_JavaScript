


// Intro - bienvenida
let welcome = $(".pricing-header");
welcome.show(2000);

// Carts
$("#lista-productos").fadeIn(600);
$("#lista-productos").delay(100).fadeOut(1500, function(){
    $("#lista-productos").fadeIn(1000);
    $("body").fadeIn(1000).css("background-color", "#F9E79F");
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


