
//EXERCICE JSON du tableau animaux
imgtigre = "<img class='imganimal'  src='tigre.jpg' alt='photo tigre'/>";
imgelephant = "<img class='imganimal'  src='elephant.jpg' alt='photo elephant'/>";
imgleopard = "<img class='imganimal'  src='leopard.jpg' alt='photo leopard'/>";
imglion = "<img class='imganimal'  src='lion.jpg' alt='photo leopard'/>";
input = "<input type='submit' value='voir'>";

var ligne = '{ "animal" : [' + '{"nom":"tigre" , "img":"'+imgtigre+'", "description" : "Description tigre" , "pays":"Bengale" , "input":"'+input+'"},' + '{"nom":"elephant" , "img":"'+imgelephant+'", "description" : "Description elephant" , "pays":"Bengale" , "input":"'+input+'"},' + '{"nom":"leopard" , "img":"'+imgleopard+'", "description" : "Description leopard" , "pays":"Bengale" , "input":"'+input+'"}, ' + '{"nom":"lion" , "img":"'+imglion+'", "description" : "Description lion" , "pays":"Bengale" , "input":"'+input+'"} ]}';


// Ajoute les widget avec les animaux
var tablanimo = JSON.parse(ligne);
  for (var i=0; i<tablanimo.animal.length ; i++ ){
    var banane =$("<div class='spaghetti'>");
    var id = "ligne" + i;
    banane.attr({id:id});
    $('#table').append(banane);
    $('#'+id).append("<div class='patate'>"+ tablanimo.animal[i].nom+"</div>");
    $('#'+id).append("<div class='patate'>"+ tablanimo.animal[i].img+"</div>");
    $('#'+id).append("<div class='patate'>"+ tablanimo.animal[i].description+"</div>");
    $('#'+id).append("<div class='patate'>"+ tablanimo.animal[i].pays+"</div>");
    $('#'+id).append("<div class='patate'>"+ tablanimo.animal[i].input+"</div>");
  }

/
//Fontions pour vérifier les champs du formulaire
  function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

//Vérifie que le texte dans le formulaire a entre 2 et 12 caractères
  function verifId(champ){
     if(champ.value.length < 2 || champ.value.length > 12)
     {
        surligne(champ, true);
        alert('Identifiant ou mot de passe incorrect. Entrez entre 2 et 12 caractères.');
     }
     else
     {
        surligne(champ, false);
        return true;
     }
  }



//Fonction qui cache mon modal quand je clique sur "se connecter"

//Quand je clique sur "se connecter", début de la fonction de connexion à Ajax
  $("#connexion").click(function(event){

   event.preventDefault();
    var identifiant={ login : $('#identifiant').val(), password: $('#password').val()};


//Début de mon ajax
      $.ajax({
        url:"animaux.php",
        type:"POST",
        data : identifiant,
      }).done(function(arg){
        console.log(JSON.stringify (arg));
          if(arg =="\r\nSuccessadmin"){
            $(".spaghetti").append('<button type="button"> Modifier</button>');
            $(".spaghetti").append('<button type="button"> Supprimer</button><br><br>');
            $("body").prepend('<button type="button"> Ajouter</button>');
          }
/*
          if(arg =="\r\nSuccessuser"){
            $("body").append('<button type="button"> Découvrir</button>');
          }
*/

   });
   });


/*
       success : function(code,statut){
          alert("ça marche"+statut);
        },
        error: function (code, statut,erreur){
          alert("y a une erreur"+statut+" erreur :"+erreur);
        },
        complete : function (code, statut){
          alert("on est complet");
        }

   }
 */
