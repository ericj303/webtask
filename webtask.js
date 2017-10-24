const quotes = [
  "You shouldn't give circumstances the power to rouse anger, for they don't care at all. - Marcus Aurelius",
  "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
  "Sometimes even to live is an act of courage. ― Seneca",
  "Luck is what happens when preparation meets opportunity. ― Seneca",
  "Difficulties strengthen the mind, as labor does the body. ― Seneca",
  "Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older. ― Seneca",
  "Begin at once to live, and count each separate day as a separate life. ― Seneca",
  "No man was ever wise by chance ― Seneca",
  "There is no good or bad without us, there is only perception. There is the event itself and the story we tell ourselves about what it means.",
  "In life, it doesn’t matter what happens to you or where you came from. It matters what you do with what happens & what you’ve been given.",
];

const max = quotes.length;
const randomNum = Math.floor(Math.random() * max);

//send stoic quote to myself via twilio
const accountSid = 'AC6c3a6201f1b810b39ec440983f2e6625';
const authToken = '<token goes here>';
const client = require('twilio@2.2.1')(accountSid, authToken);

client.messages
  .create({
    to: '+19545405616',
    from: '+19546377270',
    body: quotes[randomNum],
  })
  .then((message) => console.log(message.sid));
    
module.exports = function (cb) { 
  cb(null, quotes[randomNum]); 
}

