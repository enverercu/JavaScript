var h3 = document.querySelector("h3");
h3.style.background = "yellow";
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click",function(){
	console.log("CLICKED");
})
button.addEventListener("mouseenter",function(){
	console.log("CLICKED");
})
button.addEventListener("mouseleave",function(){
	console.log("CLICKED");
})
var button2 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
function inputLength(){
	return input.value.length;
}
function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}
button2.addEventListener("click",function(){
	if (inputLength() > 0){
		createListElement();
	}
})
input.addEventListener("keypress",function(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
})
function sayHello(){
	console.log("Hello");
}
sayHello();
function multiply(a,b){
	return a * b;
}
var total = multiply(3,4);
alert(total);

var myList = ["dog","cat"];
var mySortList = myList.sort();
alert(mySortList);

var obj = {
	name : "enver",
	age : 39,
	married: function(){
		console.log("Yes");
	}
}
alert(obj.name);
obj.married();

obj.car = "Ford";

alert(obj.car);

var list = [
	{
		username : "enver",
		password : "234"
	},
	{
		username : "jess",
		password : "123"
	}
];
alert(list[1].username);

var emptyObj = {};
emptyObj.name = "Andy";

console.info(emptyObj.name);

var newList = ["one","two"];
for (var i=0; i < newList.length; i++){
	console.info(newList[i]);
}
newList.forEach(
	function(i){ console.info(i);}
)