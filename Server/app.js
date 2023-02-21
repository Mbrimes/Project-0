const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

app.get('/', (req, res) => res.send('Another Day to work Harder'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));