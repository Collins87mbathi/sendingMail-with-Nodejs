const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const sendRoute = require("./controllers/sendMail");
const PORT  = process.env.PORT || 8000;


app.use(express.json());
app.use(cors({origin:'*'}))


app.get('/', (req, res) => {
 res.send("welcome to the server");
});

//middleware
app.use('/sendmail', sendRoute);

// Listening on the server 
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});