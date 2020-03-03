function ajax_get_request(callback, url, async) {
	var xhr = new XMLHttpRequest(); // Création de l'objet

	// Définition de la fonction à exécuter à chaque changement d'état
	xhr.onreadystatechange = function(){
		/* readyState permet de connaître l'état de la requête :
			=> 0: L'objet XHR a été créé, mais pas encore initialisé
			=> 1: L'objet XHR a été créé, mais pas encore envoyé
			=> 2: La méthode send vient d'être appelée 
			=> 3: Le serveur traite les informations et a commencé à renvoyer des données 
			=> 4: Le serveur a fini son travail, et toutes les données sont réceptionnées 
		*/
		if (callback && xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			// Si le serveur a fini son travail
			// et que le code d'état indique que tout s'est bien passé
			// => On appelle la fonction callback en passant en paramètre
			//		les données récupérées sous forme de texte brut
			callback(xhr.responseText);
		}
	};

	xhr.open("GET", url, async); // Initialisation de l'objet
	xhr.send(); // Envoi de la requête

	/* Pour plus de détails : 
	https://openclassrooms.com/fr/courses/245710-ajax-et-lechange-de-donnees-en-javascript/244798-lobjet-xmlhttprequest */
}
