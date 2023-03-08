// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const books = require('./routes/api/books'); 
const auth = require('./routes/api/auth.routes');
const user = require('./routes/api/user.routes'); 

const app = express();  

// Connect Database
connectDB(); 

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello world am done with MERN Stack!'));

// use Routes
app.use('/api/books', books);
app.use('/api/auth.routes', auth);
app.use('/api/user.routes', user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

