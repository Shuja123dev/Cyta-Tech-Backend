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

const transporter = nodeMailer.createTransport({
    service: 'outlook',
    auth: {
        user: "shujaa.udin@outlook.com",
        pass: "Shuja*123"
    }
})

const sendEmail = async (message) => {
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
        subject: `Mail from ${message.email}`,
        text: mailBody,
    }
    const res = await transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
            console.log("error");
            return error
        }
        else {
            console.log("info.response");
            return info.response
        }
    })
    console.log("after sending");
    return res;
}

server.post("/send-mail", async (req, res) => {
    const mailInfo = req.body;
    const response = await sendEmail(mailInfo);
    console.log(response);
    res.send(response);
})

server.listen(8002, () => {
    console.log("Server Responding at PORT 8002");
})