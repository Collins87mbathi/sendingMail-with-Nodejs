const router = require('express').Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

router.post('/', async (req,res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
         user:process.env.USER,
         pass:process.env.PASS
        }
    });
     const mailOptions = {
        from: `${req.body.email}`,
        to:`${process.env.USER}`,
        subject: `Message from ${req.body.name}`,
        html: `
        <div style="max-width: 700px; margin:auto; border: 10px solid #5651e5; padding: 50px 20px; font-size: 110%;">
        <p>${req.body.message}</p>
         </div>`
     }

    await transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
        console.log(error);
        res.status(500).send(error);
      }else {
        console.log('Email sent successfully' + info.response);
        res.status(200).send("email sent")
      }
    });

});

module.exports = router;