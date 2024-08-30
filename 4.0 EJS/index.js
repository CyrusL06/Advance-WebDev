// To make view directory + files
// mkdir views; touch index.js views/index.ejs
// npm i express ejs

import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // Code from searching how to GetDay
    const today = new Date();
    const day = today.getDay();

    // console.log(day);
    // Classes made for below res.render
    let type = "a weekday";
    let adv  = "Its time to work hard";

    // Weekend
    if(day === 0 || day === 6){
        type = "the weekend";
        adv  = "Its time to rest hard";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice:  adv,

        

    });
});

app.listen(port, () => {
    console.log('Server Running on ${port}');
});

