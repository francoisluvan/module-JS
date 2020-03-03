

//créer 4 tableaux de pays
var France = ['Paris','Marseille','Lyon','Grenoble'];
var Espagne = ['Madrid','Barcelone','Valence','Seville'];
var Canada = ['Montreal','Ottawa','Toronto','Vancouver'];
var Irlande = ['Dublin','Galway','Limerick','Cork'];


//message suite au clic


function bienvenue(){
//c'est ici le default machin !!
event.preventDefault();

    var ville = document.getElementById("ville").value;
    var pays=" ";

    for (var i=0; i<France.length; i++ ) {

      if ( ville == France[i]){
        /*grisée pour la question suivante :
        alert("Bienvenue en France");
        */
          pays = 'France';
          div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter: <br> <ul>";

          for (var i=0; i<France.length; i++) {
              if(ville!=France[i]){
          $('#div1').append("<li>"+ France[i]+"</li>");
        }
        $('#div1').after("</ul>");
      }

/*        +". Vous pouvez aussi visiter :"+"<ul>";

            for (var i=0; i<France.length; i++) {
                if(ville!=France[i]){
                  div1.innerHTML += "<li>" + France[i] + "</li>";
                }
            }
          div1.innerHTML+="</ul><br>";
            //ajouter un nouvel objet
            var nouvdiv = document.createElement("div");
            document.getElementById("div1").appendChild(nouvdiv);
*/

      }


      if ( ville == Espagne[i]){
        //alert("Bienvenue en Espagne");
         pays = 'Espagne';
         div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter: <br> <ul>";

         for (var i=0; i<Espagne.length; i++) {
             if(ville!=Espagne[i]){
         $('#div1').append("<li>"+ Espagne[i]+"</li>");
       }
       $('#div1').after("</ul>");
     }
/*         ". Vous pouvez aussi visiter :"+"<ul>";

           for (var i=0; i<Espagne.length; i++) {
               if(ville!=Espagne[i]){
                 div1.innerHTML += "<li>" + Espagne[i] + "</li>";
               }
           }
         div1.innerHTML+="</ul><br>";
           //ajouter un nouvel objet
           var nouvdiv = document.createElement("div");
           document.getElementById("div1").appendChild(nouvdiv);
*/
     }



      if ( ville == Canada[i]){
      //alert("Bienvenue au Canada");
        pays = 'Canada';
        div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter: <br> <ul>";

        for (var i=0; i<Canada.length; i++) {
            if(ville!=Canada[i]){
        $('#div1').append("<li>"+ Canada[i]+"</li>");
      }
      $('#div1').after("</ul>");
    }
/*        ". Vous pouvez aussi visiter :"+"<ul>";

          for (var i=0; i<Canada.length; i++) {
              if(ville!=Canada[i]){
                div1.innerHTML += "<li>" + Canada[i] + "</li>";
              }
          }
        div1.innerHTML+="</ul><br>";
          //ajouter un nouvel objet
          var nouvdiv = document.createElement("div");
          document.getElementById("div1").appendChild(nouvdiv);
*/
    }



      if ( ville == Irlande[i]){
      //alert("Bienvenue en Irlande");
        pays = 'Irlande';
        div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter: <br> <ul>";

        for (var i=0; i<Irlande.length; i++) {
            if(ville!=Irlande[i]){
        $('#div1').append("<li>"+ Irlande[i]+"</li>");
      }
      $('#div1').after("</ul>");
    }


/*        ". Vous pouvez aussi visiter :"+"<ul>";

          for (var i=0; i<Irlande.length; i++) {
              if(ville!=Irlande[i]){
                div1.innerHTML += "<li>" + Irlande[i] + "</li>";
              }
          }
        div1.innerHTML+="</ul><br>";
          //ajouter un nouvel objet
          var nouvdiv = document.createElement("div");
          document.getElementById("div1").appendChild(nouvdiv);
    }
    */
  }}

    if (pays==" "){
      alert('Ville inexistante. Me fais pas faire une syncope.');
    }


}




document.getElementById("form").onsubmit = (bienvenue);

//Modification du DOM

function ajouter(){
document.getElementById("submit").setAttribute("value", "ajouter");
}

document.getElementById("form").addEventListener("submit", ajouter);
