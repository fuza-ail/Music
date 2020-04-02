const routerUser = require('express').Router();
const controllerUser = require('../controllers/controllerUser')

routerUser.get('/',(req,res)=>{
  res.send('test')
})
routerUser.post('/login', controllerUser.login);
routerUser.post('/register', controllerUser.register);


module.exports = routerUser;