var express = require('express')();
var expressMail = require('express-mail');
 
// Configure express-mail and setup default mail data. 
expressMail.extend(express, {
  transport: 'SMTP',
  config: {
    service: 'Gmail',
    auth: {
      user: 'schooliaofficial@gmail.com',
      pass: 'GrussmanJe2'
    }
  },
  defaults: {
    from: 'schooliaofficial@gmail.com'
  }
});
 
// Setup email data. 
var mailOptions = {
  to: 'radimbudac@gmail.com',
  subject: 'Hello ✔',
  locals: {
    title: 'Hello',
    message: 'Welcome to my website'
  }
}
 
modules.exports.sendMail = function(){
    express.send('mail', mailOptions, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent: ' + response.message);
      }
    });
}