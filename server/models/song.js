'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Song extends Model {

  }
  Song.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    picture: DataTypes.STRING,
    clip: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {sequelize})

  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User)
  };
  return Song;
};