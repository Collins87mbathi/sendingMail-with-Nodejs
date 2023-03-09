const router = require('express').Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

router.post('/', async (req,res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
         user:"bryanheri2023@gmail.com",
         pass:"eccgjrpruyrrudkf"
        }
    });
     const mailOptions = {
        from:`${req.body.email}`,
        to:"bryanheri2023@gmail.com",
        subject: `Message from ${req.body.name}`,
        html: `
        <div style="margin:auto; font-size: 110%;">
        <p>${req.body.message}</p>
         </div>`
     }

     transporter.sendMail(mailOptions, (error, info) => {
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