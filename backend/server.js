const express = require("express");
require("dotenv").config();
const routes = require("./routes/routes");
const app = express();
require('./modal/dbModal')
const port = process.env.PORT;
const cors = require("cors");
app.use(express.static("public"));

//cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: [3000],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(routes);

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("we listen port", port);
});


