const express = require("express");
const nodeMailer = require("nodemailer");
const server = express();

server.get("/", (req, res) => {
    res.send("Home Page");
})

server.listen(8002, () => {
    console.log("Server Responding at PORT 8002");
})