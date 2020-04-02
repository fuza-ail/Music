const routerMusic = require('express').Router();
const controllerMusic = require('../controllers/controllerMusic')
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
routerMusic.use(authentication);
routerMusic.get('/music', controllerMusic.getLikedSongs);
routerMusic.post('/music/search', controllerMusic.getSongBySearch);
routerMusic.post('/music/:id', authorization, controllerMusic.addToLikedSongs);
routerMusic.delete('/music/:id', authorization, controllerMusic.deleteLikedSongs);
//get events of song artist
routerMusic.get('/music/:id/events', authorization, controllerMusic.getEvents);
module.exports = routerMusic;