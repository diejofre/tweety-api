const express = require("express");
const app = express();
const cors = require('cors')
const routes = require('./routes');
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3001, function () {
  console.log("Servidor corriendo en el puerto 3001");
});
