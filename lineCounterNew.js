const fs = require("fs");

let fileName = process.argv[2];

if (fs.existsSync(fileName) == false) {
	console.log("The filename " + fileName + " does not exist!");

	process.exit();
	
{

let data = fs.readFileSync(fileName, "utf8");

let exploded = data.split("\n");

console.log("The file" + fileName + " has a total of " + exploded.length + "lines.");
