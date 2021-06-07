const router = require("express").Router();
const twitterBank = require("../tweetBank");

// /tweets

router.get("/", (req, res) => {
  res.send("entraste a la pagina de tweets");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id); //remember that the parameters are coming as string
  const list = twitterBank.find({ id: id });
  res.send({ tweets: list });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const text = req.body.text;
  twitterBank.add(name, text);
  res.sendStatus(200);
});

module.exports = router;
