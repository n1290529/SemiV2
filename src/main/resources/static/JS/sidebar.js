window.onload = function() {
	let arrow = document.querySelectorAll(".arrow");
	for (var i = 0; i < arrow.length; i++) {
		arrow[i].addEventListener("click", (e) => {
			let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
			arrowParent.classList.toggle("showMenu");
		});
	}
	let sidebar = document.querySelector(".sidebar");
	document.getElementById("header_bug").addEventListener("click", function() {
		$("body").css("overflow", "hidden")
		sidebar.classList.toggle("close");
	});
	document.getElementById("side_bug").addEventListener("click", () => {
		$("body").css("overflow", "")
		sidebar.classList.toggle("close");
	});
}