require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const businessRouter = require("./routes/business-routes");
const accountingRouter = require("./routes/accounting-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", businessRouter);
app.use("/api", accountingRouter);

mongoose.connect("mongodb://127.0.0.1:27017/gecko").then(() => {
    console.log("Database connected...");
});

app.get("/", (req, res) => {
    res.send("listening on port 5000");
});

app.listen(5000, () => {
    console.log("listening on 5000");
});