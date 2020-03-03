function ajax_post_request(callback, url, async, data) {
	var xhr = new XMLHttpRequest(); // Création de l'objet

	xhr.onreadystatechange = function() {
		if (callback && xhr.readyState == 4 && xhr.status == 200){
			callback(xhr.responseText);
		}
	};

	xhr.open("POST", url, async); // Initialisation de l'objet

	xhr.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded"); // Format des données envoyées

	// Envoi de la requête
	if(data === null){
		xhr.send(null);
	} else {
		xhr.send("data=" + data);
	}
}
