// variables globales (à mettre au début du fichier)
var edition = new Boolean();
var textedit = new Boolean();
var deplacement = new Boolean();
var allcookies = document.cookie;

//Q9 bis - les variables globales s'initialisent au début du code. Là on ne lui donne pas de valeur
  var memory;

//Q1 et Q2 qui efface la zone d'affichage avec la touche CE:
function rab(){
  document.getElementById("zone_affichage").value="";
}


//Q3 et Q4 qui permet de faire des calculs (évalue le contenu pour l'exprimer en arithmétique)
function calcul(){
  //le try se place toujours au début de la fonction
  try {
    eval(document.getElementById("zone_affichage").value);
  }
  catch(err) {
    alert("Je ne peux pas calculer ça !");
    return ;
  }
  document.getElementById("zone_affichage").value=eval(document.getElementById("zone_affichage").value);

}


//Q5 associe un bouton à un chiffre
//+= permet de répéter l'élément d'avant et d'ajouter la suite
function affiche(bouton){
  document.getElementById("zone_affichage").value+=bouton.value;
}


//Q6 associe un bouton aux chiffres via la fonction affiche
  function init(){
    //les boutons simples sont dans un tableau à cause de getElementsByClassName
    var tableau = document.getElementsByClassName("bouton_simple");
      for (i=0;i<tableau.length;i++){
        //affiche(this) -> renvoie au bouton
        tableau[i].setAttribute('onclick', 'affiche(this)');
      }

    var table = document.getElementsByClassName("bouton_libre");
      for(i=0; i<table.length; i++){
        var moncookie = getCookie(table[i].id);
        table[i].value=moncookie;
      }
  }


//Q7 ajoute ou efface un signe "-" devant le nombre
 function plusmoins(){
   var nombres = document.getElementById("zone_affichage").value;

   // ajoute un signe moins devant le nombre
       if (nombres.charAt(0)!="-"){
          document.getElementById("zone_affichage").value="-"+nombres;
       }
       if (nombres.charAt(0)=="-"){
          document.getElementById("zone_affichage").value=nombres.substring(1);
       }
   }


//Q8 active la touche mémoire MS qui stocke les données affichées
  function range_memory(){
    var affichage = document.getElementById("zone_affichage").value;
    //on donne le résultat de affichage à la variable globale initialisée au début du code
    memory = affichage;
    return affichage;
  }
  //variable globale qui stocke la mémoire de la zone d'affichage


//Q9 Le bouton MR affiche le nombre en mémoire
  function affiche_memory(){
      var catchmemory = memory;
        if (catchmemory == undefined){
        }
        else {
          document.getElementById("zone_affichage").value+=catchmemory;
        }
      }

//Q10 le bouton MC efface la mémoire
  function raz_memory(){
    var erase_memory = memory;
    memory = undefined;
  }




//Partie 2- Q.2 Le bouton E active le mode édition et devient rouge

function mode_edition(){
    if (edition==false){
      var table = document.getElementsByClassName("bouton_libre");

        for (i=0; i<table.length; i++){

          table[i].setAttribute("ondblclick", "edit()");
        }

      edition = true;
      document.getElementById("E").style.color = "red";
      document.getElementById("E").RemoveAttribute;


  }
    if (edition==true) {
    document.getElementById("E").setAttribute("onclick", "mode_calcul()");
  }
}



//Partie 2. Q.3 Le bonton E repasse en mode calcul et redevient noir

function mode_calcul(){
    if (edition==true){
    edition = false;
    document.getElementById("E").style.color = "black";

    var table = document.getElementsByClassName("bouton_libre");
    for (i=0; i<table.length; i++){

      table[i].removeAttribute("ondblclick", "edit()");
    }


    }
    if (edition==false){
      document.getElementById("E").setAttribute("onclick", "mode_edition()");
      if (textedit==false){
        var table = document.getElementsByClassName("bouton_libre");
        for (i=0; i<table.length; i++){
          table[i].setAttribute("type", "button");
        }
    }

  }
}


//Partie 2. Q.7 Fonction edit

  function edit(){
    var table = document.getElementsByClassName("bouton_libre");
    for (i=0; i<table.length; i++){

      table[i].setAttribute("type", "text");
      table[i].setAttribute("ondblclick", "fix()");
    }

  /*  table.onblur = function(){ {myFunction()};
    function myFunction(){
      alert("onblur fonctionne !");
    }
*/

//TP3
  //  table.value.onblur = save(this);
  }

//Partie 2. Q.8
  function fix(){
    var table = document.getElementsByClassName("bouton_libre");
      if(textedit==false){
        //J'ai possiblement inversé les true et les false mais le résultat est bon
        textedit=true;
        save();
        for (i=0; i<table.length; i++){

          table[i].setAttribute("type", "button");

//TP3
          //save();
        }

      }
      else{
        textedit=false;
        for (i=0; i<table.length; i++){

          table[i].setAttribute("type", "texte");
        }
      }
  }


//Partie 3. Un double clic déplace la zone d'affichage du haut vers le bas et vice-versa

  function deplace(){
    if(deplacement==false){
      deplacement=true;
      var affichage = document.getElementById("zone_affichage");
      var dernierediv = document.getElementById("libre6");
      dernierediv.insertAdjacentElement("afterend", affichage);
    }
    else{
    deplacement=false;
    var affichage = document.getElementById("zone_affichage");
    var premierediv = document.getElementById("premierediv");
    premierediv.insertAdjacentElement("beforebegin", affichage);
    }
  }

//TP3

//Fonction qui crée un cookie
function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//fonction qui récupère un cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//fonction qui sauvegarde la valeur du bouton libre
  function save(){
    var table = document.getElementsByClassName("bouton_libre");
    for(i=0; i<table.length; i++){
      setCookie(table[i].id, table[i].value);
    }
  }
