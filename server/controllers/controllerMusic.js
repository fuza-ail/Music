const axios = require("axios");
const { Song } = require('../models')
class controllerMusic {
    static getLikedSongs(req, res){
        let id = req.UserId;
        Song.findAll({where: {UserId : id, like : true}})
            .then(songs => {
                res.status(200).json({songs});
            })
            .catch(err => {
                res.status(500).json({message : err.message});
            })
    }
    static getSongBySearch(req, res){
        let searchInput = req.body.search;
        let title;
        let artist;
        let picture;
        let clip;
        let lyrics;
        let song;
        axios({
            "method":"GET",
            "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":"006ad1b96amsh797559630fa32f2p1918adjsn56d71bb95e0c"
            },"params":{
            "q":searchInput
            }
            })
            .then((data)=>{
                song = data.data.data[0];
                console.log(song);
                title = song.title;
                artist = song.artist.name;
                picture = song.album.cover_big;
                clip = song.preview;
                let artistSearch = artist.split(' ').join('%20').toLowerCase();
                let titleSearch = title.split(' ').join('%20').toLowerCase();
                Song.create({title,artist,picture,clip, like : false, UserId: req.UserId})
                    .then((songData)=>{
                        axios({
                            "method":"GET",
                            "url":`https://private-anon-8be88db5ae-lyricsovh.apiary-proxy.com/v1/${artistSearch}/${titleSearch}`,
                            })
                            .then((songLyrics)=>{
                                lyrics = songLyrics.data.lyrics;
                                console.log(lyrics)
                                res.status(200).json({song : songData,lyrics});
                            })
                            .catch((error)=>{
                              console.log(error)
                            })          
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    static addToLikedSongs(req, res){
        let id = req.params.id;
        Song.update({like : true}, {where : {id : id}})
            .then(()=>{
                return Song.findByPk(id)
            })
            .then(song => {
                res.status(200).json({song}); 
            })
            .catch(err=>{
                res.status(404).json({message : 'Song not found'})
            })
    }
    static deleteLikedSongs(req, res){
        let id = req.params.id;
        let song
        Song.findByPk(id)        
            .then((result) =>{
                song = result;
                return Song.destroy({where : {id : id}})
            })
            .then(() => {
                res.status(200).json({song});
            })
            .catch(err=>{
                res.status(404).json({message : 'Song not found'})
            })
    }
    static getEvents(req, res){
        let id = req.params.id;
        Song.findByPk(id)
            .then(song => {
                let keyword = song.artist;
                return axios({
                    "method":"GET",
                    "url":`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&classificationName=music&apikey=qjdwY0n3PvucUYlBvyEktMp8YAiFoAD7`
                })
            })
            .then((result)=>{
                let temp = [];
                if(result.data._embedded){
                    let events = result.data._embedded.events;
                    console.log(events.length)
                    if(events.length > 5){
                        events = events.splice(0,5);
                    }
                    events.forEach(event =>{
                        let obj = {
                            name : event.name,
                            date : event.dates.start.localDate,
                            time :event.dates.start.localTime,
                            url : event.url
                        }
                        temp.push(obj)
                    })    
                }
                res.status(200).json({events : temp});
            })
            .catch(err=>{
                res.status(500).json({message : 'Internal Server Error'})
            })
    }
}
module.exports = controllerMusic;