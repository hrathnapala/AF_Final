var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/getDetails/:email/:password", (req, res) => {
  User.find({
    email: req.params.email,
    password: req.params.password,
  })
    .then((user) => {
      if (user.length != 0) {
        res.send(user);
      } else {
        res.send(null);
      }
    })
    .catch((err) => res.send(err));
});

router.post("/create", (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    user.save().then((user) => {
      res.status(200).send({
        message: "Employee created successfully",
        data: user,
      });
    });
  } catch (err) {
    res.status(502).send({
      message: "Ooooopzzz, server error",
      error: err,
    });
  }
});

module.exports = router;
