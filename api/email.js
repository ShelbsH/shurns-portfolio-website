const router = require('express').Router();
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv');

dotenv.config();

router.post('/send', (req, res) => {
  const { firstName, lastName, email, organization, description } = req.body;
  const {domain, api_key} = process.env;
  
  res.setHeader('Content-Type', 'application/json');

  const transporter = nodemailer.createTransport(mailgunTransport({
    auth: {
      domain,
      api_key
    }
  }));

  const descriptionHTML = `
  <h1>Shurns Portfolio Support Question</h1>
  <h2>Name: ${firstName + ' ' + lastName}</h2>
  <h2>Email Address: ${email}</h2>
  <h2>Organization: ${organization || 'Not listed'}</h2>
  <p>${description}</p>`;

  const mailOptions = {
    from: 'Shurns Portfolio Support <slainuponmyshield@gmail.com>',
    to: 'slainuponmyshield@gmail.com',
    subject: 'Shurns Portfolio Support Question',
    html: descriptionHTML
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }    
    res.status(200).send(JSON.stringify({message: 'message has been sent'}))
    console.log('Message successfully sent');
  });
});

module.exports = router;
