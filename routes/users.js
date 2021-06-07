const router = require("express").Router();
const twitterBank = require("../tweetBank");

// We are already in /users, so /:name is really /users/:name

router.get("/", (req, res) => {
  res.send("entraste a la pagina de usuarios");
});

router.get("/:name", (req, res) => {
  const name = req.params.name;
  const list = twitterBank.find({ name: name });
  res.send({ tweets: list, showForm: true, twitero: name });
});

module.exports = router;
