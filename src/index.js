const express = require('express');
const bodyParser = require('body-parser');
const nodeMialer = require("nodemailer");

const server = express();

server.get('/', async (req, res) => {
    res.send("Mails Here..");
})

server.listen(4001, () => {
    console.log("Listening App at Port 4001");
});