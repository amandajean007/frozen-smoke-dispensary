const express = require("express");
const colors = require("colors");
const app = express();
const cors = require("cors");
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

///////////////////////////////////////////
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
///////////////////////////////////////////

const dotenv = require("dotenv").config();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}))
 
///////////////////////////////////////////
// app.use(bodyParser.urlencoded())

// app.get('/', function(req, res) {
//   res.send('express is working')
// })

// app.post('/members', (req, res) => {
//   console.log(req.body.name); // 'foo'
//   console.log(req.body.phone); // '3034899999'
// })

///////////////////////////////////////////

app.listen(port, () => 
  console.log(`Server is running on port: ${port}`));

connectDB();

app.use('/api/members', require('./routes/memberRoutes'))
app.use('/api/messages', require('./routes/messageRoutes'))

app.use(errorHandler);