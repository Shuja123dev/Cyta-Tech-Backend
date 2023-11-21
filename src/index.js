const express = require('express');
const bodyParser = require('body-parser');
const nodeMialer = require("nodemailer");

const server = express();

server.get('/', async (req, res) => {
    res.send("Mails Here..");
})

module.exports.app = server;
module.exports.handler = serverless(server);