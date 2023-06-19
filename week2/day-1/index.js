const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    abc = sum1(100);
    console.log( abc + ' is the Sum') 
  })
  
app.get('/handleSum',handlereq)
app.post('/postreq',postreq)

function handlereq(req,res)
{
    request = req.query.counter
    abc = sum1(request);
    abc = ( abc + ' is the Sum') 
    res.send(abc)
}

function  postreq(req,res){
res.send('Post request initiated')
}


// abc = sum(100);
// console.log( abc + ' is the Sum')


function sum1(limit){
    sum=0
    for(i=0;i<limit;i++)
    {
        sum = sum+i
    }
    return sum;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

