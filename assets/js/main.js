// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var n;
var slides = document.getElementsByClassName("pic");

function modftn(img){
	modal.style.display = "block";
  	modalImg.src = img.src;
  	captionText.innerHTML = img.alt;
	currentSlide(n);
}

function currentSlide(x){
	n=x;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
 	modal.style.display = "none";
}

// top/newest photo has highest number -- decrease to go on
function next() {
      
	if (n == 1) {
		n = slides.length;
	}

	else {

		n -= 1;
	}

	img = document.getElementById(n);
        modftn(img);
	
}

function prev() {

	if (n == slides.length) {
		n = 1;
	}

	else {
		n += 1;
	}

	img = document.getElementById(n);
	modftn(img);
}
