const express = require('express') 
//This line imports the Express module, making it available for use in your code.

//The app variable represents your Express application, and you will use it to configure routes, middleware, and other functionalities.
//This line creates an instance of the Express application. 
const app = express()
const port = 3000


//This line sets up a route for handling GET requests to the root URL ('/'). 
//When a GET request is made to the root URL, the callback function is executed '(req, res)  =>......'. 
//In this case, the callback function sends the response 'Hello World!' back to the client.
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//By using app.use(), you are mounting the static file-serving middleware globally, which means it will be applied to all routes.
app.use(express.static('public'))

//This line sets up a route for handling GET requests to the root URL ('/'). 
//When a GET request is made to the root URL, the callback function is executed. 
//In this case, the callback function sends the response 'Hello World!' back to the client.
app.get('/api', (req, res)  => {
    res.status(200).send("Hello World!")
})
