const express = require("express");
const app = express();

const cors = require("cors");


const salesRoute = require("./routes/salesRoute");
const signupRoute = require("./routes/routes");
console.log('in App.js');

//middlewares
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.headers);
    next();
  });


//Routes
app.use("/app/v1/sales", salesRoute);
app.use("/app/v1/signup", signupRoute);

module.exports = app;
