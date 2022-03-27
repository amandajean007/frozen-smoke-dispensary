const express = require("express");
const colors = require("colors");
const app = express();
const cors = require("cors");
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');



////////// old
// require("dotenv").config({ path: "./config.env" });
////////// new
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}))
// get driver connection
// const dbo = require("./db/conn");
 
app.listen(port, () => 
// {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
  console.log(`Server is running on port: ${port}`));
// });

connectDB();

app.use('/api/members', require('./routes/memberRoutes'))

app.use(errorHandler);

console.log("Hello World");