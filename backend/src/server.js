const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
// Configure session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 

 
app.listen(port, () => {
console.log(`Server running at${port}`);
});

