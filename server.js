const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const nodemailer = require("nodemailer");
const { error } = require('console');

app.use(bodyParser.urlencoded({extended: false}));
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.json());

app.listen(3000, function () {
    console.log("Server is running on port 3000 ");
  });

  app.get("/", function (req, res) {
    res.render('index');
  });

  app.get("/sendEmail", urlEncodedParser, async (req, res) => {

    const emailMessage = req.query.message;
    const first = req.query.fname;
    const last = req.query.lname;
    const employerEmail = req.query.email;
    // const fullName = first + ' ' + last
    console.log(emailMessage, first, last, employerEmail);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'xboxonebro14@gmail.com',
        pass: 'fyjr wkbu eqgj ppxp',
      },
    });   
    
    
        const message = {
        from: employerEmail, // sender address
        to: 'ethansmithson413@gmail.com', // list of receivers
        subject: `${first} ${last}: ${employerEmail} Employer Message 📃`, // Subject line
        text: "New Message!", // plain text body
        html: emailMessage,
    }
    // async..await is not allowed in global scope, must use a wrapper
    // async function main() {
    //   if(error) {
    //     console.log(error);
    //     res.send('error');
    //   } else {
    //     console.log('Email Sent');
    //     res.send('success');
    //   }
    //   // send mail with defined transport object
    //   const info = await transporter.sendMail(message);
    
    //   console.log("Message sent: %s", info.messageId);

    // }

    // main().catch(console.error);

    transporter.sendMail(message, (error, info) => {
      if(error) {
        console.log(error);
        res.send('error');
      } else {
        console.log('Email Sent');
        res.render('partials/emailNoti');
      }
    })

  })