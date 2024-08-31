/*
LOGGING FOCUS


MIDDLEWARE Types

-PRE PROCESSING - body-parser

-LOGGING - package name morgan
 used to log the request in the server.

 -AUTH
 
-ERROR

*/


import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
