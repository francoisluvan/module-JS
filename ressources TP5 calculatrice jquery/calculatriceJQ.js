// variables globales (à mettre au début du fichier). Pas obligé de mettre var car c'est global
edition = new Boolean();
textedit = new Boolean();
deplacement = new Boolean();

//Q9 bis - les variables globales s'initialisent au début du code. Là on ne lui donne pas de valeur
memory = undefined;

//Q1 et Q2 qui efface la zone d'affichage avec la touche CE:
function rab(){
  $("#zone_affichage").val("");
//  document.getElementById("zone_affichage").value="";
}


//Q3 et Q4 qui permet de faire des calculs (évalue le contenu pour l'exprimer en arithmétique)
function calcul(){
  //le try se place toujours au début de la fonction
  try {
    eval($("#zone_affichage").val());
  //  eval(document.getElementById("zone_affichage").value);
  }
  catch(err) {
$( "#dialog" ).dialog( "open" );
    return;
  }
  $("#zone_affichage").val(eval($("#zone_affichage").val()));
  //document.getElementById("zone_affichage").value=eval(document.getElementById("zone_affichage").value);

}


//Q5 associe un bouton à un chiffre
//+= permet de répéter l'élément d'avant et d'ajouter la suite
function affiche(bouton){
  $("#zone_affichage").val($("#zone_affichage").val()+$(bouton).val());
  //document.getElementById("zone_affichage").value+=bouton.value;
}


//Q6 associe un bouton aux chiffres via la fonction affiche
  function init(){

    $( function() {
        $( "#orange" ).accordion({
          collapsible: true
        });
      } );


    $( function() {
      /*  var availableTags = [
          "Math.abs",
          "Math.ceil",
          "Math.cos",
          "Math.E",
          "Math.exp",
          "Math.floor",
          "Math.log",
          "Math.max",
          "Math.min",
          "Math.PI",
          "Math.pow",
          "Math.round",
          "Math.sin",
          "Math.sqrt"

        ];
        */
        $( ".bouton_libre" ).autocomplete({
          source: "search.php"
        });
      } );

    $( function() {
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "drop",
            duration: 1000
          }
        });

      } );

    $( function()
    {var valeur=""
      $( ".unNom" ).draggable({ revert: true,containment: "document", scroll:false },
        {drag:function(event,ui){
          valeur=$(this).attr('id')
        }
      }
    );

      $( ".bouton_libre" ).droppable({
        drop: function( event, ui ) {

          $(this).val(valeur);

        }
      });
    } );
    /*
    //var banane = document.getElementsByTagName("span");
    $("span").each(function(){
      $(this).attr('ondragstart', 'drag(event)')
    });

      for (i=0;i<banane.length;i++){
        //affiche(this) -> renvoie au bouton
        banane[i].setAttribute('ondragstart', 'drag(event)');
      }
      */
    //les boutons simples sont dans un tableau à cause de getElementsByClassName
    //var tableau = document.getElementsByClassName("bouton_simple");
    $(".bouton_simple").each(function(){
      $(this).attr('onclick', 'affiche(this)')
    });
      /*for (i=0;i<tableau.length;i++){
        //affiche(this) -> renvoie au bouton
        tableau[i].setAttribute('onclick', 'affiche(this)');
      }
*/

/*
  //  var table = document.getElementsByClassName("bouton_libre");
    $(".bouton_libre").each(function(){
      $(this).val($.cookie($(this).attr('id')));
      $(this).attr("ondragover", "allowDrop(event)");
      $(this).attr("ondrop", "drop(event)");
    });
    */
    /*
      for(i=0; i<table.length; i++){
      //  var moncookie = $.cookie($("#libre6").attr('id'));
        var moncookie = getCookie(table[i].id);
        table[i].value=moncookie;
        table[i].setAttribute("ondragover", "allowDrop(event)");
        table[i].setAttribute("ondrop", "drop(event)");
      }
      */
  }


//Q7 ajoute ou efface un signe "-" devant le nombre
 function plusmoins(){
   var nombres = $("#zone_affichage").val();
   //var nombres = document.getElementById("zone_affichage").value;

   // ajoute un signe moins devant le nombre
       if (nombres.charAt(0)!="-"){
         $("#zone_affichage").val("-"+nombres);
        //  document.getElementById("zone_affichage").value="-"+nombres;
       }
       if (nombres.charAt(0)=="-"){
         $("#zone_affichage").val(nombres.substring(1));
        //  document.getElementById("zone_affichage").value=nombres.substring(1);
       }
   }


//Q8 active la touche mémoire MS qui stocke les données affichées
  function range_memory(){
    var affichage =$("#zone_affichage").val();
    //var affichage = document.getElementById("zone_affichage").value;
    //on donne le résultat de affichage à la variable globale initialisée au début du code

//REGEXP
    var reg = new RegExp (/^-?\d+\.?\d*$/);
      if(reg.test(affichage)==true) {
      memory = affichage;
      return affichage;
      }
      else {
        $( "#dialog" ).dialog( "open" );
      }

  }
  //variable globale qui stocke la mémoire de la zone d'affichage


//Q9 Le bouton MR affiche le nombre en mémoire
  function affiche_memory(){
      var catchmemory = memory;
        if (catchmemory == undefined){
        }
        else {
          $("#zone_affichage").val($("#zone_affichage").val()+catchmemory);
          //document.getElementById("zone_affichage").value+=catchmemory;
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
      $(".bouton_libre").each(function(){
        $(this).attr("ondblclick", "edit(this)")
        $(this).removeAttr("onclick")
      });
      /*
      var table = document.getElementsByClassName("bouton_libre");

        for (i=0; i<table.length; i++){

          table[i].setAttribute("ondblclick", "edit(this)");
          table[i].removeAttribute("onclick");
          */
        }

      edition = true;
      document.getElementById("E").style.color = "red";

    //  document.getElementById("E").RemoveAttribute;


    if (edition==true) {
    $("#E").attr("onclick", "mode_calcul()");
    //document.getElementById("E").setAttribute("onclick", "mode_calcul()");
  }
}



//Partie 2. Q.3 Le bonton E repasse en mode calcul et redevient noir

function mode_calcul(){
    if (edition==true){
    edition = false;
    document.getElementById("E").style.color = "black";

    $(".bouton_libre").each(function(){
      $(this).attr("onclick", "affiche(this)")
      $(this).removeAttr("ondblclick")
    });



  //  var table = document.getElementsByClassName("bouton_libre");
  //  for (i=0; i<table.length; i++){
  //  table[i].setAttribute("onclick", "affiche(this)");
  //  table[i].removeAttribute("ondblclick");
  //  }


    }
    if (edition==false){
      $("#E").attr("onclick", "mode_edition()");
      //document.getElementById("E").setAttribute("onclick", "mode_edition()");
      if (textedit==false){
        $(".bouton_libre").each(function(){
          $(this).attr("type", "button")
          $(this).removeAttr("onblur")
        });
        /*
        var table = document.getElementsByClassName("bouton_libre");
        for (i=0; i<table.length; i++){
        table[i].setAttribute("type", "button");
        table[i].removeAttribute("onblur");
        }
        */
    }
}}


//Partie 2. Q.7 Fonction edit

  function edit(banane){
  //  var table = document.getElementsByClassName("bouton_libre");
/*    for (i=0; i<table.length; i++){
}*/
      $(banane).attr("type", "text");
      $(banane).attr("ondblclick", "fix(this)");
      $(banane).attr("onblur", "save(this)");
      //banane.setAttribute("type", "text");
      //banane.setAttribute("ondblclick", "fix(this)");
      //banane.setAttribute("onblur", "save(this)");

  /*  table.onblur = function(){ {myFunction()};
    function myFunction(){
      alert("onblur fonctionne !");
    }
*/

//TP3
  //  table.value.onblur = save(this);
  }

//Partie 2. Q.8
  function fix(bouton){

    var table = document.getElementsByClassName("bouton_libre");
      if(textedit==false){
        textedit=true;
      $.cookie($(bouton).attr('id'),$(bouton).val());
        $(bouton).attr("type", "texte");
      //  bouton.setAttribute("type", "texte");
      }

      else{
        textedit=false;
        $(bouton).attr("type", "button");
          //bouton.setAttribute("type", "button");
      }
      $(bouton).removeAttr("onblur");
    //  bouton.RemoveAttribute("onblur");
  }


//Partie 3. Un double clic déplace la zone d'affichage du haut vers le bas et vice-versa

  function deplace(){
    if(deplacement==false){
      deplacement=true;
    //  var affichage = document.getElementById("zone_affichage");
      //var dernierediv = document.getElementById("libre6");
      $("#calc").append($("#zone_affichage"));
      //dernierediv.insertAdjacentElement("afterend", affichage);
    }
    else{
    deplacement=false;
  //  var affichage = document.getElementById("zone_affichage");
  //  var premierediv = document.getElementById("premierediv");
  //  premierediv.insertAdjacentElement("beforebegin", affichage);
    $("#premierediv").prepend($("#zone_affichage"));
    }
  }

//TP3

//Fonction qui crée un cookie


/*
function setCookie(cname, cvalue, exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires="+ d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
*/
//fonction qui récupère un cookie
/*
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
*/

//fonction qui sauvegarde la valeur du bouton libre
  function save(bouton){
    $.cookie($(bouton).attr('id'),$(bouton).val());
  }


//Drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.value= data;
  save(ev.target);
}
