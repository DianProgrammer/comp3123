const express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 3000;


// -------------------------------------------------- Set up middleware for express ----------------------------------------------

// Serve JSON
app.use(express.json());

// Serve static files
app.use(express.static("public"));

// ------------------------------------------------------------------------------------------------------------------------------
// GET /hello
app.get("/hello", (request, response) => {
    response.status(200).send("Hello Express JS");
});

//------------------------------------------------------------------------------------------------------------------------------
// GET /user?firstname=&lastname=
app.get("/user", (request, response) => {
    const firstname = request.query.firstname || "Pritesh";
    const lastname = request.query.lastname || "Patel";

    response.json({
        firstname: firstname,
        lastname: lastname
    });
});


//------------------------------------------------------------------------------------------------------------------------------
// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (request, response) => {
    const { firstname, lastname } = request.params;
    response.json({
        firstname: firstname,
        lastname: lastname
    });
});

//------------------------------------------------------------------------------------------------------------------------------
// POST /users
app.post("/users", (request, response) => {
    const users = Array.isArray(request.body) ? request.body : [];

    response.json(users);
});


//------------------------------------------------------------------------------------------------------------------------------
app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost:" + SERVER_PORT);
});