//we add this one
const express = require('express');
const routerUser = express.Router();

//we add this to get user data
const user = require('../user.json');

/*
- Return all details from user.json file to client as JSON format
*/
//we changed router to routerUser
routerUser.get('/profile', (req,res) => {
  //we changed this to return user data
  res.json(user);
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
//we changed this to check username and password
routerUser.post('/login', (req,res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    res.json({
      status: false,
      message: "User Name is invalid"
    });
  } else if (password !== user.password) {
    res.json({
      status: false,
      message: "Password is invalid"
    });
  } else {
    res.json({
      status: true,
      message: "User Is valid"
    });
  }
});
/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
//we changed this to get username from URL
routerUser.get('/logout/:username', (req,res) => {
  const username = req.params.username;

  //we add this to show logout message
  res.send(`<b>${username} successfully logged out.</b>`);
});
//we export the router to use it in index.js
module.exports = routerUser;