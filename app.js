const express = require("express");
const app = express();
const routes = require('./routes');
const morgan = require("morgan");

app.use(morgan("tiny")); //formá simplificada de morgan

// let tweetsDeEjemplo = [
//   { id: 1, name: "juan", content: "este es un tweeettt de juan" },
//   { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
//   { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
// ];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
