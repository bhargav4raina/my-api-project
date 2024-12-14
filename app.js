const express = require('express'); // Import Express.js
const app = express(); // Create an Express app

// Create an endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send a response when the endpoint is hit
});



// GET request: Retrieve data
app.get('/data', (req, res) => {
    res.json({ message: 'Here is some data!' });
});

// POST request: Create data
app.post('/create', (req, res) => {
    res.send('Data created successfully!');
});

// PUT request: Update data
app.put('/update', (req, res) => {
    res.send('Data updated successfully!');
});

// DELETE request: Delete data
app.delete('/delete', (req, res) => {
    res.send('Data deleted successfully!');
});



// Start the server
const PORT = 3000; // Define the port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})