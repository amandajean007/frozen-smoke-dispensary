const express = require("express");
const app = express();
const cors = require("cors");

////////// old
// require("dotenv").config({ path: "./config.env" });
////////// new
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => 
// {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
  console.log(`Server is running on port: ${port}`));
// });



app.use('/api/members', require('./routes/memberRoutes'))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:5001/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

console.log("Hello World");