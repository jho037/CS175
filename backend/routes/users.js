var express = require('express');
var bcrypt = require("bcrypt");
var router = express.Router();
let User = require('../models/user.model');
const mongoose = require('mongoose');
/* GET users listing. */
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Errors: ' + err));
  const hash = bcrypt.hashSync("a", 10);
  console.log(hash);
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  var password = req.body.password;
  const hash = bcrypt.hashSync(password, 10);
  password = hash
  const newUser = new User({ name, email, phonenumber, password });
  User.find({
    email: req.body.email
  })
    .then(user => {
      if (user.length == 0) {
        newUser.save()
          .then((user) => {
            res.json(user);
          })
          .catch(err => res.status(400).json('Error: ' + err));
      }
      else {
        res.json("Email in use");
      }
    }
    )
});

router.route('/update/password').post((req, res) => {
  const id = req.body.id;
  const currpass = req.body.currpass;
  const hash = bcrypt.hashSync(req.body.newpass, 10);
  newpass = hash;
  User.findById(id)
    .then(user => {
      console.log(user.password)
      bcrypt.compare(currpass, user.password).then((result) => {
        if (result) {
          user.password = newpass;
          user.save()
            .then(() => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err));
        }
        else {
          res.send("1");
        }
      });
    })
    .catch(err => res.status(400).json('Errors: ' + err));
});

router.route('/update/email').post((req, res) => {
  const id = req.body.id;
  const curremail = req.body.curremail;
  const newemail = req.body.newemail;
  User.findById(id)
    .then(user => {
      if (curremail == user.email) {
        console.log("changing email")
        user.email = newemail;
        user.save()
          .then(() => res.json(user))
          .catch(err => res.status(400).json('Error: ' + err));
      }
      else {
        res.send("1");
      }
    })
    .catch(err => res.status(400).json('Errors: ' + err));
});

router.route('/search').post((req, res) => {

  User.find({
    email: req.body.email
  })
    .then(user => {


      if (user.length == 0) {
        res.send("0");
      }
      else {
        bcrypt.compare(req.body.password, user[0].password).then((result) => {
          if (result) {
            res.send(user[0]);
          }
          else {
            res.send("1");
          }
        });
      }

    })
    .catch(err => res.status(400).json('Errors: ' + err));
});

module.exports = router;
