const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session")
const path = require ("path");
const routes = require();
const passport = require("passport");
const app = express();

const PORT = process.env.port || 3001;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// defining api routes and where request head to
if (process.env.NODE_ENV === "production") {
    app.all('*', function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  } else {
    app.all('*', function(req, res) {
      res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
  }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// middleware 
app.use(
  session({ secret: "pineapples", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
routes(app);

//   connection 
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });