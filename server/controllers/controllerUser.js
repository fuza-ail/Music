const { User } = require('../models');
const { hashPassword, checkPassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class controllerUser {
  static login(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        let valid = checkPassword(req.body.password, user.password);
        if (valid) {
          let token = jwt.sign({
            UserId: user.id,
            UserEmail: user.email
          }, process.env.TOKEN_ID)
          res.status(200).json({ access_token: token })
        } else {
          res.status(400).json({ error: 'wrong password' })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static register(req, res) {
    const userData = {
      email: req.body.email,
      password: hashPassword(req.body.password)
    }
    User.create(userData)
      .then(user => {
        let token = jwt.sign({
          UserId: user.id,
          UserEmail: user.email
        }, process.env.TOKEN_ID)
        res.status(201).json({ access_token: token })
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = controllerUser