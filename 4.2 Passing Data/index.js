// Passind Data on EJS to SERVER 

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Rendering index.ejs in the server
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  // TEST
  // console.log(numLetters); 
//  Render this EJS    AND Pass "numLetters" with new constant
  res.render("index.ejs", {numOfLetters: numLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
