const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require("path");

const db = require("../ex_02/db.js");
const collection = "member";


app.get("/", function(req,res){

  res.sendfile('register.html');
})
// app.get("/login", function(rep, res){

//   res.sendFile('login.html')
// })
app.listen(27042,()=>{
  console.log('ça marche');
} );

app.post('/login', function(req,res){
  console.log(req.body);
  res.render('login',{qs: req.query});
});

// app.post('/login' , function(req, res){
// db.then(function(db){
//   deletereq.body._id;
//   db.collection('member').inserOne(req.body);
// });

// });

// Export du modele
// const http = require('http');
// const fs = require('fs');
// //const app = express();

// function onRequest (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./register.html', null, function (error, data){
//         if(error){
//             res.writeHead(404);
//             res.write('file not found');

//         } else {
//             res.write(data);
//         }
//       res.end();
//     });
// }
