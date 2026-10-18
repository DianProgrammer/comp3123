/*
Purpose: 
Set up the path for the root/
Set up the middleware for the JSON URLencoding
Set up the path for the NotesRoutes
*/


const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notesRoutes');
const PORT = process.env.PORT || 8081;

const DB_URL = 'mongodb+srv://kianasepasian_db_user:3OMNWEbvoFd6c1r7@week06cluster.ii3rvxc.mongodb.net/';
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up the route to the root / path 
app.get('/', (request, response) => {
    response.send("<h1>Welcome to the root path of the server ");
});

//Set up our route to route set up in the routes/NotesRoutes.js file
app.use('/notes', notesRoutes);

//Set up the connection to the MongoDB using our coneection string 
// and mongoose framework.
mongoose.connect(DB_URL)
    .then(() => {

        console.log('Succedfully connected to the MongoDB Atlas server');
        app.listen(PORT, () => {
            console.log(`Server listening at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
        console.log('Could not connect to MongoDB server')
        process.exit(1)
    })