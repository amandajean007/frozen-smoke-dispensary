const express = require("express");
const colors = require("colors");
const app = express();
const cors = require("cors");
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.listen(port, () => 
  console.log(`Server is running on port: ${port}`));

connectDB();

app.use('/api/members', require('./routes/memberRoutes'));
app.get("/", (req, res) => res.send("Hello World!!"));
app.use(errorHandler);