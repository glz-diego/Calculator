var calculator = new Object();
function one(){
	var textnode = document.createTextNode(1);
	document.getElementById("output").appendChild(textnode);
}
function two(){
	var textnode = document.createTextNode(2);
	document.getElementById("output").appendChild(textnode);
}
function three(){
	var textnode = document.createTextNode(3);
	document.getElementById("output").appendChild(textnode);
}
function four(){
	var textnode = document.createTextNode(4);
	document.getElementById("output").appendChild(textnode);
}
function five(){
	var textnode = document.createTextNode(5);
	document.getElementById("output").appendChild(textnode);
}
function six(){
	var textnode = document.createTextNode(6);
	document.getElementById("output").appendChild(textnode);
}
function seven(){
	var textnode = document.createTextNode(7);
	document.getElementById("output").appendChild(textnode);
}
function eight(){
	var textnode = document.createTextNode(8);
	document.getElementById("output").appendChild(textnode);
}
function nine(){
	var textnode = document.createTextNode(9);
	document.getElementById("output").appendChild(textnode);
}
function zero(){
	var textnode = document.createTextNode(0);
	document.getElementById("output").appendChild(textnode);
}
function clear(){
	let output = document.querySelector("#output");
	output.innerHTML = "";
}
function first(){
	var first = document.querySelector("#output").value;
	if (output != "") {
		let output = document.querySelector("#output");
		output.innerHTML = "";
	}
}
function second(){
	var second = document.querySelector("#output").value;
	if (output != "") {
		let output = document.querySelector("#output");
		output.innerHTML = "";
	}
}
var calculate = function() {
			console.dir(this);
			
			var x = document.querySelector(first);
			var y = document.querySelector(second);
			
			var result;

			if(this.id == "btnadd") {
				result = calculator.add(x.value, y.value);
				var textnode = document.createTextNode(result);
				document.getElementById("output").appendChild(textnode);
			}

			else if (this.id == "btnsub") {
				result = calculator.subtract(x.value, y.value); 
				console.log(result);
			}

			else if (this.id == "btnmul") {
				result = calculator.multiply(x.value, y.value); 
				console.log(result);
			}

			else if (this.id == "btndiv") {
				result = calculator.divide(x.value, y.value); 
				console.log(result);
			}

			var out = document.querySelector("#output");
			output.value = result;
}