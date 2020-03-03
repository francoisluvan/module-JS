//alert("Attention !");
/*
function mafonction(){
  i=0;
  return (i+j);
}
var i,j;
i=prompt("entrez une valeur");
i=parseInt(i);
j=parseInt(prompt("entrez une valeur"));
r=mafonction();
alert("resultat:"+r");
*/



function fairesomme(tabl){
  var somme=0;
  for (i=0; i<tabl.length;i++){
      somme+=tabl[i];
  }
  return somme;
}

function fairemoyenne(tabl){
  var somme=0;
  var moyenne=0;
  for (i=0; i<tabl.length;i++){
      somme+=tabl[i];
  }
  moyenne=(somme/[i]);
  return moyenne;
}

function count_zero(tabl){
  var nb_zero=0;
  for(i=0; i<tabl.length;i++){
    if(tabl[i]==0){
      nb_zero++;
    }
  }
  return nb_zero;
}

var nb=0;
var somme=0;
var moyenne=0;
var tableau=[];
var nb_zero=0;



for (i=0;nb!=(-1);i++){
  nb=parseInt(prompt("ecris-moi un nombre, stp"));
      if(nb!=(-1)){
      tableau[i] = nb;

      //somme+=nb;
    }
      if(nb==0){
        //nb_zero++;
      }}

/*var somme= fairesomme(tableau);
alert('la somme est '+somme);*/

/*var moyenne = fairemoyenne(tableau);
alert('la moyenne est '+moyenne);*/

var zero = count_zero(tableau);
alert('le nombre de zero est '+zero);


/*
moyenne=(somme/[i-1]);
alert("La somme des nombres est : "+somme+" et la moyenne : "+moyenne+ "et le nombre de zero(s) est : "+nb_zero);
*/
