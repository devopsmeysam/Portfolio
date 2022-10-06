// const connect = require('connect');
// const app = connect();
// app.listen(3000);

// function logger(req, res, next){
//     console.log(req.method, req.url);
//     next();
// }

// function helloWorld(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello jujmeiiiiiiii');
// }

// function goodbye(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Good bye jujmeiiii');
// }

// app.use(logger);
// app.use('/hello', helloWorld);
// app.use('/goodbye', goodbye);

// console.log('Server running at http://localhost:3000/');


const express = require('express')
const app = express()
const port = 3000

//Route:
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Starts the server:
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
