const express = require('express'); // Load Express library
const app = express(); // Create an app instance

const PORT = 3000; // Define the port number


// Import routes
const userRoutes = require('./routes/userRoutes'); 
const statusRoutes = require('./routes/statusRoutes');

//Root route
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

// Use Routes
app.use('/', statusRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => { // Start the server
    console.log(`Server is running on http://localhost:${PORT}`)
});