// create a web server

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');
// Run the server and access the URL http://localhost:3000/comments in your browser. This will display the contents of the comments.json file. 
// If you have a comments.json file with the following contents:

// [
//   {
//     "author": "Pete Hunt",
//     "text": "This is one comment"
//   },
//   {
//     "author": "Jordan Walke",
//     "text": "This is *another* comment"
//   }
// ]
// You will see the following output in your browser:

// [{"author":"Pete Hunt","text":"This is one comment"},{"author":"Jordan Walke","text":"This is *another* comment"}]
// This is a simple server that returns the contents of a JSON file. The server uses the fs module to read the file and sends the contents back to the client. 
// We set the Content-Type header to application/json to indicate that the response contains JSON data. 
// The res.send() function sends the data to the client. 
// The server listens on port 3000, and the console.log() function prints a message to the console when the server starts. 
// You can access the server by visiting http://localhost:3000/comments in your browser.

// Now that we have a simple server, let's create a React component that fetches the data from the server and displays it.

// React: Fetching Data