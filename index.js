const express = require('express'); // Load Express library
const app = express(); // Create an app instance

const PORT = 3000; // Define the port number

// Root route
app.get('/', (req, res) => { // define a route for GET requests at '/'
    res.json({ message: 'Welcome to my API'}) // Send this message as a response
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Ryan' },
        { id: 2, name: 'Alex' }
    ];
    res.json(users)
});

app.get('/status', (req, res) => {
    res.json({ status: 'Server is running' })
})

app.listen(PORT, () => { // Start the server
    console.log(`Server is running on http://localhost:${PORT}`)
});