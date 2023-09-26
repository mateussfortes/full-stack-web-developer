import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact page</h1>");
});

// HTTP METHODS

app.post("/register", (req, res) => {
    res.sendStatus(201);
});








app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});


