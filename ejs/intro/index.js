import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const today = new Date("June 24, 2023 11:13:00");
    const day = today.getDay();

    let type = "it's a week day";
    let adv = "is time to work!";

    if(day === 0 || day === 6) {
        type = "it's a weekend";
        adv = "is not time to work!";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
    
});

app.listen(port, () => {
    console.log(`Server runing on port ${port}.`);
});