const express = require('express');
const bodyParser = require('body-parser');
const nodeMialer = require("nodemailer");
const serverless = require("serverless-http")

const server = express();

server.get('/', async (req, res) => {
    res.send("Mails Here..");
})

module.exports.server = server;
module.exports.handler = serverless(server);