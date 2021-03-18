//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');

const connectOptions = {
  autoReconnect: true,
  useNewUrlParser: true,
  promiseLibrary: global.Promise // Deprecation issue again
};

app.use(cors())
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname));

 app.post("/api/message", (req, res, next) => {
    res.send(200)
})

 app.post("/api/contact", (req, res, next) => {
    res.send(200)
})

app.post("/api/signup", (req, res, next) => {
    res.send(200)
 });

app.get('/contact', function(request,response) {
  response.sendFile(path.join(__dirname+'/contact.html'));
});

app.get('/*', function(request,response) {
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || 8000);
