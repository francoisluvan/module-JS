

//créer 4 tableaux de pays
var france = ['Paris','Marseille','Lyon','Grenoble'];
var espagne = ['Madrid','Barcelone','Valence','Seville'];
var canada = ['Montreal','Ottawa','Toronto','Vancouver'];
var irlande = ['Dublin','Galway','Limerick','Cork'];


//message suite au clic


function bienvenue(){
//c'est ici le default machin !!
event.preventDefault();

    var ville = document.getElementById("ville").value;
    var pays=" ";

    for (var i=0; i<france.length; i++ ) {

      if ( ville == france[i]){
        /*grisée pour la question suivante :
        alert("Bienvenue en france");
        */
          pays = 'France';
          div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter :"+"<ul>";

            for (var i=0; i<france.length; i++) {
                if(ville!=france[i]){
                  div1.innerHTML += "<li>" + france[i] + "</li>";
                }
            }
          div1.innerHTML+="</ul><br>";
            //ajouter un nouvel objet
            var nouvdiv = document.createElement("div");
            document.getElementById("div1").appendChild(nouvdiv);

      }


      if ( ville == espagne[i]){
        //alert("Bienvenue en espagne");
         pays = 'Espagne';
         div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter :"+"<ul>";

           for (var i=0; i<espagne.length; i++) {
               if(ville!=espagne[i]){
                 div1.innerHTML += "<li>" + espagne[i] + "</li>";
               }
           }
         div1.innerHTML+="</ul><br>";
           //ajouter un nouvel objet
           var nouvdiv = document.createElement("div");
           document.getElementById("div1").appendChild(nouvdiv);
     }



      if ( ville == canada[i]){
      //alert("Bienvenue au canada");
        pays = 'Canada';
        div1.innerHTML+="Bienvenue au "+pays+". Vous pouvez aussi visiter :"+"<ul>";

          for (var i=0; i<canada.length; i++) {
              if(ville!=canada[i]){
                div1.innerHTML += "<li>" + canada[i] + "</li>";
              }
          }
        div1.innerHTML+="</ul><br>";
          //ajouter un nouvel objet
          var nouvdiv = document.createElement("div");
          document.getElementById("div1").appendChild(nouvdiv);
    }



      if ( ville == irlande[i]){
      //alert("Bienvenue en irlande");
        pays = 'Irlande';
        div1.innerHTML+="Bienvenue en "+pays+". Vous pouvez aussi visiter :"+"<ul>";

          for (var i=0; i<irlande.length; i++) {
              if(ville!=irlande[i]){
                div1.innerHTML += "<li>" + irlande[i] + "</li>";
              }
          }
        div1.innerHTML+="</ul><br>";
          //ajouter un nouvel objet
          var nouvdiv = document.createElement("div");
          document.getElementById("div1").appendChild(nouvdiv);
    }
}

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
