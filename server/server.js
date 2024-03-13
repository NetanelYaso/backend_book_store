const express = require('express');
const doteenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const port = 2020;


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
})


app.listen(port,()=>{
    console.log(`serveris running on port: ${port}`);
})