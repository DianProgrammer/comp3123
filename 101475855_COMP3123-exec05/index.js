
const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/users');

// Parse JSON data
app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req,res) => {
  // Send home.html file
  res.sendFile(path.join(__dirname, 'home.html'));
});

//we add this to test server error
//app.get('/test-error', (req, res, next) => {
// next(new Error('Test Error'));
//});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  // Return server error
  res.status(500).send('Server Error');
});

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));
