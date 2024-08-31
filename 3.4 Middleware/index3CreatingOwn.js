//CREATING OWN LOGGING MIDDLEWARE
//CREATING MORGAN

import express from "express";

const app = express();
const port = 3000;

//function that take
             //req  response next                 
function logger(req, res, next) {
                           //displaying the request
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
 // continue to next thing(middleware)
// order is important!
  next();
}

//Function shorcut and clean
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
