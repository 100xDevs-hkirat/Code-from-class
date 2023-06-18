const fs = require("fs");

function fileRead(err, data) {
    console.log(data);
}

fs.readFile("a.txt", "utf-8", fileRead);


function firstThing(callback) {
    callback("123123")
}

function printResponse(arg) {
    console.log(arg);
};

firstThing(printResponse);