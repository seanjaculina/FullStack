const moment = require('moment');

//this function handles returning the usersname, message and time of message [used to send the message text to the front end]
function formatMessage(username, message) {
  return {
    username,
    message,
    time: moment().format('h:mm a'),
  };
}
module.exports = formatMessage;
