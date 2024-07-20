const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.get('/', (req, res) => {
    res.send('Hello from the root path!');
});
app.listen(4000, () => {
    console.log('Server listening on port 4000');
});
mongoose
    .connect("mongodb://127.0.0.1:27017/jwt", {
    }).then(() => { console.log("DB connection succesfull"); }).catch((err) => { console.log(err.message); });

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))
app.use(express.json());