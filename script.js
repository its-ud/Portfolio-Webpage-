alert("Hello!!");
var age = prompt("How old are you(in years)?");

if(age<0){
	console.log("error");
}
if(age<18){
	console.log("sorry can't enter");
}
else if(age<21){
	console.log("enter but not drink");
}
else{
	if(age==21)
		console.log("happy 21st birthday");
	else
		console.log("enter and can drink");
}

if(age%2 !=0)
	console.log("your age is odd");



if((Math.sqrt(age)%1)==0)
	console.log("perfect square!");