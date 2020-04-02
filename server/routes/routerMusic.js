const routerMusic = require('express').Router();
const controllerMusic = require('../controllers/controllerMusic')
const authentication = require('../middlewares/authentication');
routerMusic.use(authentication);
routerMusic.get('/music', controllerMusic.getLikedSongs);
routerMusic.get('/music/search', controllerMusic.getSongBySearch);
routerMusic.post('/music/:id', controllerMusic.addToLikedSongs);
routerMusic.delete('/music/:id', controllerMusic.deleteLikedSongs);
module.exports = routerMusic;