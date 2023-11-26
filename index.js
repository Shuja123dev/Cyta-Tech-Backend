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

server.post("/send-mail", (req, res) => {
    const mailInfo = req.body;
    sendMail(mailInfo);
    res.send("test Route Working");
})

server.listen(8002, () => {
    console.log("Server Responding at PORT 8002");
})