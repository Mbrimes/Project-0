// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const books = require('./routes/api/books'); 
const auth = require('./routes/auth.routes');
const user = require('./routes/user.routes'); 

const app = express(); 

var corsOptions = {
  origin: "http://localhost:8081"
}; 

// Connect Database
connectDB(); 

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello world am done with MERN Stack!'));

// use Routes
app.use('/api/books', books);
app.use('/auth.routes', auth);
app.use('/user.routes', user);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));

