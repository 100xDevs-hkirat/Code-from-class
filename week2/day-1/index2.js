const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
// think of middlware as a black box or library that help you do bunch of things with your request before it reaches the actual handler
//

// function middleware1(req,res,next){
// console.log("from inside middleware " + req.headers.counter);
// next();
// }

// registering middleware
// app.use(middleware1);
app.use(bodyParser.json());


function calculateSum(counter) {
    var sum = 0;
    for (var i =0 ; i<=counter; i++) {
        sum = sum + i;
    }
    return sum;
}
// express will gives you headers and query params but not give any direct way to access body
// there are different types of bodies so use external library for them we don't provide anything for body
// we use body-parser for extracting body from our requests
function handleFirstRequest(req, res) {
    // console.log(req.body);
    // var counter = req.query.counter;
    // var counter = req.headers.counter;
    var counter = req.body.counter;
    // console.log(req.headers);

    var calculatedSum = calculateSum(counter);

    var answer = "the sum is " + calculatedSum;
    res.send(answer);
}

function givePage(req,res){
    res.send(`<head>
    
    <title>Document</title>
</head>
<body>
    <b>hi there</b>
</body>`)
}

// app.get('/handleSum', handleFirstRequest)
app.post('/handleSum', handleFirstRequest)
app.get('/',givePage)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)
