"use strict"

function makeUppercase (string) {
	return string.toUpperCase();
}

let name = "Prasanna";
let template = `<h1> ${makeUppercase('Hello')}, ${name} </h1>
				<p> New template for me</p>`;



document.getElementById('template').innerHTML = template;
