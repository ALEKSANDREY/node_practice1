const fs =  require("fs");

//fs.readFile();
//fs.readFIleSync();

//fs.writeFIle();
//fs.writeFileSync();



let contents = fs.readFileSync('sample.txt', 'utf8');

let dataToWrite = contents + "\nI was added to previous text";

fs.writeFileSync('sample.txt', dataToWrite, "utf8");

fs.writeFileSync("../outside.txt", "hello world", "utf8");


