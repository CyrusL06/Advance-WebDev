/*
    1. Create Directory
    2.Create js file
    3.Initialise NPM npm innit -y
    4.Install the express package (npm i express)
    5.Write Server application in index.js
    6.Start Server (node your_app.js)
*/



//Module Based Javascript type of code
//so we can import express.js
import express from "express";

//Creating app using express object
const app = express();
const port = 3000;

//listening 
 app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
 })

 /*
 Local host is when we dont hav eserver 
 using our own computer backend as server
 */

 /*
    Ports are doors in our server 
    we technichally said our port we wanted was "Local host 3000"
    We can find which port is it designated too by typing
    netstat -ano | findstr "LISTENING"
 */