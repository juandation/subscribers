const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require('morgan');

const app = express();

//Server settings
app.set("port", process.env.port || 5000);


//Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/subscribers', require('./router/subscribers.route'));


//Starting
app.listen(app.get("port"), () => {
    console.log("Server is in port", app.get("port"));
});