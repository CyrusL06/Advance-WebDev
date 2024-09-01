import express from "express";
import bodyParser from "body-parser";
// Axios using server side 
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//  it shows a random activity.You will need to check the format of the
// JSON data from response.data and edit the index.ejs file accordingly.

app.get("/", async (req, res) => {
  try {
    // makin GET request with  Axios
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    // You got the response in the "response.data"
    const result = response.data;
    // Pass the data in index.ejs
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Step 2: Play around with the drop downs and see what gets logged.
// Use axios to make an API request to the /filter endpoint. Making
// sure you're passing both the type and participants queries.
// Render the index.ejs file with a single *random* activity that comes back
// from the API request.

// Step 3: If you get a 404 error (resource not found) from the API request.
// Pass an error to the index.ejs to tell the user:
// "No activities that match your criteria."
app.post("/", async (req, res) => {
  try {
  console.log(req.body);
  const type = req.body.type;
  const participants = req.body.participants;
  //wait on the get request
  const response = await axios.get(
    // From EJS "Type" & "participants"
    `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
  );

    // and you would want a response
    const result = response.data;
    // check
    console.log(result);
    res.render("index.ejs", {
      // array of activity but only one
      data: result[Math.floor(Math.random() * result.length)],
    });
  

  } catch(error){
    if (error.response) {
      console.error("Failed Request", error.message);
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      res.render("index.ejs", {
        error: "No activities that match your criteria",
      });
      
    } 
  }



});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
