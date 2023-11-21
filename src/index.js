const express = require('express');
const bodyParser = require('body-parser');
const nodeMialer = require("nodemailer");

const server = express();

server.get('/', async (req, res) => {
    res.send("Mails Here..");
})

server.listen(process.env.PORT || 4001);