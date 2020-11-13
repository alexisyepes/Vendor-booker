const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// const seedDB = require('./scripts/seedDB')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  `mongodb+srv://vendor-booker:${process.env.MONGO_ATLAS}@cluster0.7lf47.mongodb.net/vendor-booker?retryWrites=true&w=majority`,

  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

// Start the server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
