function ShowImage() {
	var x = document.getElementById("image");
	if (x.style.opacity === "1") {
		x.style.opacity = "0";
	} else {
		x.style.opacity = "1";
	}
}