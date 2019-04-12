let number1 = process.argv[2];
let number2 = process.argv[3];

if (isNaN(number1) ) {
	if( number1 === undefined) {
		console.log("You forgot to put a number!");

	} else {
	
		console.log(number1 + "is not a valid number.");
	process.exit();
}

if (isNaN(number2) ) {
	console.log(number2 + "is not a valid number.");
	process.exit();
}


number1 = parseInt(number1);
number2 = parseInt(number2);


