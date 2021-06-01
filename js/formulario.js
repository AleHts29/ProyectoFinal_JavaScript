//Se valida formulario usando JQUERY

var expRegular = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\.\-]+\.[a-zA-Z0-9_\.\-]+$/;

$(document).ready(function(){
    $("#btn-enviar").click(function(){
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        
        if(nombre == ""){
            $("#mensaje1").fadeIn();
            return false;
        }
        else {
            $("#mensaje1").fadeOut();
            if(email == "" || !expRegular.test(email)){
                $("#mensaje2").fadeIn();
                return false;
            }
        }
    });
});