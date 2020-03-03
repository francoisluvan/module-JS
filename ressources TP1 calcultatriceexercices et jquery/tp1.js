

//fonction qui génére un nombre aléatoire

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//alert(getRandomInt(10));

var chiffre = getRandomInt(11);


for (var i=0; i <3; i++ ){
var val = parseInt(prompt("Entrez un nombre "));
if (val === chiffre) {
alert("bravo, c'est le bon chiffre");
break;
} else if(val > chiffre) {
alert("chiffre trop grand");
} else if(val < chiffre) {
alert("chiffre trop petit");
} else {
alert("Ceci n'est pas un nombre !");
}
}
alert(" le nombre a deviner etait " +  chiffre);
