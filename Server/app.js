// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const books = require('./routes/api/books');
const readingRoutes = require('./routes/api/reading');
const readRoutes = require('./routes/api/read');
const tbrRoutes = require('./routes/api/tbr')

const app = express(); 

var corsOptions = {
  origin: "http://localhost:8081"
};  

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB(); 

app.get('/', (req, res) => res.send("Welcome to Marabian Books Library, if you see this then it's working!!!"));

// use Routes
app.use('/api/books', books);
app.use('/api/reading', readingRoutes);
app.use('/api/read', readRoutes);
app.use('/api/tbr', tbrRoutes);
require('./routes/api/auth')(app);
require('./routes/api/user')(app); 

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));

