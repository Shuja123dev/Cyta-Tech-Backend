const express = require("express");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
    res.send("Home Page");
})

server.post("/send-mail", (req, res) => {
    res.send("test Route Working");
})

server.listen(8002, () => {
    console.log("Server Responding at PORT 8002");
})