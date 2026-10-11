# COMP3123 – Exercise 05
------------------------------------------------------------------------------------------------------------------

## Section B: Short Answer Questions

### Question 6: Explain the Purpose of `express.Router()` in the Code Above.

We use `express.Router()` to manage routes separately from the main application file. Instead of putting all the routes in `index.js`, we can create a separate file for routes that belong to the same part of the application. In our project, we used `users.js` for the profile, login, and logout routes. Then, we connected this router to `index.js` using `app.use()`. This makes it easier to find and update a specific route without having to change the main application file. It also makes the code easier to manage when we want to add more routes in the future.

-----------------------------------------------------------------------------------------------------------------

### Question 7: Error Handling in Express.js

We can use error-handling middleware to manage errors in Express.js. When something goes wrong inside a route, we can use `next(err)` to pass the error to the middleware. For example, in our project, we used middleware that returns status 500 with the message "Server Error". We also created a temporary route to generate an error on purpose and check if our error handler was working correctly. If a file or route cannot be found, we can return status 404 instead. This helps the client understand what type of problem happened.

------------------------------------------------------------------------------------------------------------------

## Section C: Bonus

### Question 7: Dynamic Port Binding in Express.js

This line tells the server which port it should run on. The application first checks `process.env.port`, and if no port is defined, it uses port 8081. In our exercise, we used port 8081 to run the server on our local computer. However, when an application is deployed to a real server, the hosting service may provide its own port number. Using this method allows us to run the application in different environments without having to manually change the port number in the code every time.

------------------------------------------------------------------------------------------------------------------