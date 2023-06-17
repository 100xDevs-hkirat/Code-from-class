const fs = require("fs");

function fileRead(err, data) {
    console.log(data);
}

fs.readFile("v.txt", "utf-8", fileRead);