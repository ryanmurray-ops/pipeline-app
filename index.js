const express = require('express'); // Load Express library
const app = express(); // Create an app instance

const PORT = process.env.PORT || 3000; // Define the port number

// Middleware to parse incoming JSON requestw and make data available in req.body
app.use(express.json())

// Import middleware
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const userRoutes = require('./routes/userRoutes'); 
const statusRoutes = require('./routes/statusRoutes');

// Middleware
app.use(logger);

//Root route
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

// Use Routes
app.use('/status', statusRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => { // Start the server
    console.log(`Server is running on http://localhost:${PORT}`)
});