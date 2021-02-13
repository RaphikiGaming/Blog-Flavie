var largeur = window.innerWidth;
var hauteur = window.innerHeight;

if (largeur <= hauteur) {
	document.getElementById("stylesheet").setAttribute("href", "portrait.css");
} else {
	document.getElementById("stylesheet").setAttribute("href", "style.css");
}