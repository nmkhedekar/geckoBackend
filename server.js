const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("listening on port 5000");
});

app.listen(5000, () => {
    console.log("listening on 5000");
});