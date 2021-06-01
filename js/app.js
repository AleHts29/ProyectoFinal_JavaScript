 // DATOS TRAIDOS DE UN JSON LOCAL
const DataJSON = "./data/data2.json"

$("section").prepend('<button class="container  ml-5" id = "btn2"> Leo datos JSON usando AJAX </button> <br><br>');

 $("#btn2").click( () => {
     $.getJSON(DataJSON, (res, status) =>{
        console.log("Status request is: " + status);
        console.dir(res);

        for (const symbol of res){
            $(".infoFooter").prepend(`<div>
                             <h3> Curso: <strong>${symbol.title}</strong></h3>
                             <h5>${symbol.desciption}</h5>
                             <p>Precio: USD ${symbol.price}$ </p>
                             </div>`);
            
        }

     });
 });