/*
MIDDLE WARE - pre-purpose request
Change request before it goes ti fubak routting 

FOR: 
-Request infortmation that  come thru
-AUTHENTICATION
-Pocess error before going thru handlers
-ERROR


Common used 
body-parser
used to handle form data (USERNAME, PASSWORD)

How to use middleware body-parser

*/

  


import express from "express";
//body-parser lets you take tthe data inputted in the form
import bodyParser from "body-parser";
//These 3 lines code are important to not wright the whole fullpath
import { dirname } from "path";
import { fileURLToPath } from "url";
// making it short
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//FOR MIDDLEWARE
// BodyParser (which data to pass) 
//passing info to come in
        //PATH    //DATA-PARSED  //DETERMINES WHAT DATA 
app.use(bodyParser.urlencoded({extended: true}));


// Just meant to send back resource NOT COMING IN
app.get("/", (req, res) => {
  //res.sendFile requires path to send 
  //to get the full path when my server is uploaded in order
  //you need (20,21,22) line
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

//         
app.post("/submit", (req,res) => {
  console.log(req.body);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
