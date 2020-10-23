var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
//var deleteButton = document.getElementByClassName("delete");


button.addEventListener("click", function(){
	if (input.value.length > 0){ //conditional statement if input is > than 0 output nothing
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}

})

function inputLength(){
	return input.value.length;
}

function createListElement(){

//button.addEventListener("click", function(){
	//if (inputlength() > 0){ //if user enters nothing do not allow enter button to function
	//console.log(input.value); //this line will test it in console this is an element output value
	//if you want it to display something it needs a text like in the li in the html file
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));//we need to get a value
	ul.appendChild(li);
	input.value = ""; //an empty string

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick(){
		if (inputLength() > 0){
			createListElement();
		
	}
}

function addListAfterKeypress(event){ //needs to accept a parameter
		if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}

}

//var list = document.getElementsByTagName("li");
//for(var i=0; i<list.length; i++){
	//list[i].addEventListener("click", liClick);
	//.currentTarget.classList.toggle("done");
 //}

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode(Delete));
	listItems[i].appendChild(button);
	btn.onclick = removeParent;
}

for (i=0; i<listLength(); i++){
	deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);	//if (inputLength() > 0){ //if user presses enter button go to function addListAfterClick if inputlenght is > 0
		//createListElement();
	//}
//})

input.addEventListener("keypress",addListAfterKeypress);

//input.addEventListener("keypress", addListAfterKeypress); //if user presses enter key go to function addListAfterKeypress if inputlength is > 0 && event.keyCode ===13
	//if (input.value.length > 0 && event.keyCode === 13) {
		//createListElement();
		//var li = document.createElement("li");
		//li.appendChild(document.createTextNode(input.value))
		//ul.appendChild(li);
		//input.value = "";
	//}

//})

//dry code meaning do not repeat yourself make it look simple