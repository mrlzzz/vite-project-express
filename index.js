const express = require("express");

const app = express();

app.get("/home", (req, res) => {
    res.send("Hi!");
});

const port = process.env.port || 9001;
app.listen(port, () => {
    console.log("Listening at " + port);
});
