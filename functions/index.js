const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

const config = functions.config();
admin.initializeApp();

// настраиваем емаил и пароль в firebase
// firebase functions:config:set user.email='noreply.arcdevelopment.com'
// firebase functions:config:set user.password='my-password'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: 'Arc development',
  to: 'bar@example.com, baz@example.com',
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: '<b>Hello world?</b>',
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent successfuly');
      }
    });
  });
});

//firebase deploy
