const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For JSON body parsing

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/employees', require('./controller/employee'));

// Run server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});