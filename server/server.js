const express = require("express");
require("colors");
const app = express();
const cors = require("cors");
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5001;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.listen(port, () => 
  console.log(`Server is running on port: ${port}`));

connectDB();

app.use('/api/members', require('./routes/memberRoutes'));

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    res.send("Sorry, but our page is under contruction. See you soon!!");
  });
}

app.use(errorHandler);