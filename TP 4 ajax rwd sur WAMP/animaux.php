
<?PHP



$identifiant = $_POST['identifiant'];
$password = $_POST['password'];

if (isset($_POST['identifiant']) AND $_POST['password'] =="kangourou")
  {echo 'Bienvenue dans votre session.';}
else
  {echo 'Le mot de passe est erroné. <br> Indice : le mot de passe est kangourou';}


?>
