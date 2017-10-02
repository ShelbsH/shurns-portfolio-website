const router = require('express').Router();
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

router.post('/send', (req, res) => {
  const { firstName, lastName, email, organization, description } = req.body;

  const transporter = nodemailer.createTransport(mailgunTransport({
    auth: {
      domain: 'sandbox46c4ae8bf6944c2786212d738f88cef9.mailgun.org',
      api_key: 'key-11de6f728b88e6637a31324a6313a038'
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
    }
    res.status(200).send('Email has successfully sent!');
  });
});

module.exports = router;
