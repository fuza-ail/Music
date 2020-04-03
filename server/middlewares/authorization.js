const { Song } = require('../models');
function authorization (req, res, next){
    Song.findByPk(req.params.id)
        .then( song => {
            if(!song){
                res.status(404).json({message: 'Song not found'})
            }else{
                if(song.UserId == req.UserId){
                    next()
                }else{
                    res.status(400).json({message: 'Access Forbidden'})
                }
            }
        })
        .catch( err => {
            res.status(500).json({message: err.message});
        });
}
module.exports = authorization;