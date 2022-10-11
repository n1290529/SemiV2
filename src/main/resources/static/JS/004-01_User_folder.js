window.addEventListener('load', function() {
	console.log(projectsName);
	const element = document.getElementsByClassName("searchlist01");
	for (let i = 0; i < projectsName.length; i++) {
		element[i]
			.addEventListener(
				"click",
				function() {
					location.href = "http://localhost:8080/create/" + projectsName[i];
				});
	}
});