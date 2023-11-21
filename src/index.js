const express = require('express');
const bodyParser = require('body-parser');
const nodeMialer = require("nodemailer");
const cors = require("cors")

const server = express();
server.use(bodyParser.json())
server.use(cors())

const transporter = nodeMialer.createTransport({
    service: 'outlook',
    auth: {
        user: "shujaa.udin@outlook.com",
        pass: "Shuja*123"
    }
})



function sendMail(message) {
    const mailBody = `First Name : ${message.firstName}
    Last Name : ${message.lastName}
    E-mail : ${message.email}
    Phone Number : ${message.phoneNo}
    Comapny : ${message.company}
    Service : ${message.service}
    Project Details : ${message.projectDetails}
    Budget : ${message.budget}
    Deadline : ${message.deadline}
    Comment : ${message.comment}`;


    const mailInfo = {
        from: 'shujaa.udin@outlook.com',
        to: 'shuja1339@gmail.com',
        subject: 'test',
        text: mailBody,
    }
    transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
            console.log("error : ", error);
        }
        else {
            console.log("mail sent", info.response)
        }
    })
}

server.get('/', (req, res) => {
    console.log("Home Page");
    res.send("Home Page")
})

server.post('/mailInfo', async (req, res) => {
    const body = req.body;
    console.log(body);
    sendMail(body);
})

server.listen(4001, () => {
    console.log("Listening App at Port 4001");
});