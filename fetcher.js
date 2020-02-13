const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.



  fs.writeFile(args[1], body, function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved xxxx bytes to ${args[1]}`);
  });



  if (response.statusCode !== 200 || error !== null) {
    // exit?
  }
});