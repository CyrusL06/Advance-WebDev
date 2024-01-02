/*

HTTP is communication between u and ther server

Request VOCAB

GET    --> Request resource from server
POST   --> Sending a resource to server 
ex: sign up form.
PUT    --> Replace Resource
PATCH  --> Patch up resource
DELETE --> Delete resource

{nodemon index.js application for automatically restarting file changes}

npm i -g
*/

import express from "express";
const app = express();
const port = 3000;


       //ROOT
app.get("/", (req, res) => {
    //console.log(req.rawHeaders);

    //sends the request in the server 
    //and sends it back 
    //res.send("Hello"); DOESNT WORJ
    res.send("<h1>BRUH</h1>");
});

//Multi page web
//localhost:3000/about
app.get("/about", (req, res) => {
    res.send(" <h1> ABOUT ME </h1> My name is bruh")
})


app.listen(port, () => {
    //function when its open
    console.log(`Server had started ${port}`)
});




