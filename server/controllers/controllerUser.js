const { User } = require('../models');
const { hashPassword, checkPassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class ControllerUser {
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
          }, process.env.JWT_SECRET)
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
        }, process.env.JWT_SECRET)
        res.status(201).json({ access_token: token })
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  // GOOGLE LOGIN
  static loginGoogle(req,res){
    const token = req.body.token;
    const userData = {}
    client.verifyIdToken({
      idToken:token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    .then(data=>{
      const payload = data.getPayload();
      userData.email = payload.email;
      userData.password = hashPassword('default')
       return User.findOne({
        where:{
          email: payload.email
        }
      })
    })
    .then(user=>{
      if(user){
        return user
      }else{
        return User.create(userData)
      }
    })
    .then(theUser=>{
      const token = jwt.sign({
        email: theUser.email,
        id : theUser.id
      }, process.env.JWT_SECRET)
      res.status(200).json({
        access_token: token
      })
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  }

  //FACEBOOK LOGIN
  static loginFacebook(req,res){
    let userData = {}
    userData.email = req.body.email;
    userData.password = hashPassword('default')
    console.log(userData)
    User.findOne({where:{email: userData.email}})
    .then(user=>{
      if(user){
        return user
      }else{
        return User.create(userData)
      }
    })
    .then(theUser=>{
      const token = jwt.sign({
        email: theUser.email,
        id : theUser.id
      }, process.env.JWT_SECRET)
      res.status(200).json({
        access_token: token
      })
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  }
}

module.exports = ControllerUser