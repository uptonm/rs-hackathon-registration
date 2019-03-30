const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./models/user.model");
require("./services/passport"); // Passport handles oAuth

mongoose.connect(
  process.env.DBURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxDays: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve prod assets i.e. main.js/main.class
  app.use(express.static("client/build")); // If a route is unrecognized, look at react build

  // Express will serve up index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    // Serve the client the document in that case
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
