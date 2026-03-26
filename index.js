const express = require('express'); // Load Express library
const app = express(); // Create an app instance
const PORT = 3000; // Define the port number

app.get('/', (req, res) => { // define a route for GET requests at '/'
    res.send('Hello World!') // Send this message as a response
});

app.listen(PORT, () => { // Start the server
    console.log(`Server is running on http://localhost:${PORT}`)
});