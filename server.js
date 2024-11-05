// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// User routes
app.use('/api/users', userRoutes);

// Add this route to handle GET requests to the root
app.get('/', (req, res) => {
    res.send('Welcome to the User Authentication API');
});

// Start the server on the provided PORT
const PORT = process.env.PORT || 5000; // Default to 5000 for local testing
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
