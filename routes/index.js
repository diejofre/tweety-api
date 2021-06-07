const express = require("express");
const twitterBank = require("../tweetBank");

const userRoutes = require("./users");
const tweetsRoutes = require("./tweets");

const router = express.Router(); //app

router.get("/", function (req, res) {
  let lista = twitterBank.list();
  res.send({ tweets: lista, showForm: true });
});

router.use("/users", userRoutes); // Using Middlewares for Routes
router.use("/tweets", tweetsRoutes); // Using Middlewares for Routes

module.exports = router;
