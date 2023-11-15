const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const port = process.env.port || 9001;
const corsOptions = {
    origin: "http://localhost:5173/vite-project/projects/api",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
const message = {
    content: "Exemplary guestbook message",
    user: "mrl",
    date: Date.now(),
};

app.use(cors());
//db.connect();

app.get("/", (req, res) => {
    res.json({ test: "test" });
});

app.get("/guestbook/all", async (req, res) => {
    // try {
    //     const documents = await db.findDocuments("guestbook", {});
    //     console.log("Received data from the database");
    //     console.log(documents);
    //     res.json(documents);
    // } catch (error) {
    //     console.error("Error fetching data from the database:", error);
    //     res.status(500).json({ error: "Failed to fetch data" });
    // }
    res.send(message);
});

app.listen(port, () => {
    console.log("Listening at " + port);
});
