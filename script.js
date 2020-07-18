// Variables
const colors = ["a6dcef","f5b971","fdd998","39375b","170a19","e4f2f0","ffba92","eeeeee","fbe8e7","494949","dfd3c3","ea8f79","ff8c94","f3d179","b1d1c5"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// If JS is supported, set a random background color + set text to white

function colorPicker() {

	// Selector variables 
	var x = document.getElementById("body");
	var y = x.querySelectorAll("P, A, H1, H2");
	var i;

	document.getElementById("container").style.backgroundColor = "#".concat(randomColor);
		
	for (i = 0; i < y.length; i++) {
 		y[i].style.color = "#FFFFFF";
 		y[i].style.mixBlendMode = "difference";
	}
}