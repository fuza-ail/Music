$(document).ready(function () {
  // BULMA
  // ==========
  $('.dropdown-trigger').click(function () {
    $('.dropdown').toggleClass('is-active');
  });
  // ==========

  // Routes from @JulioSabandar
  // ==========
  // routerMusic.get('/music', controllerMusic.getLikedSongs);
  // routerMusic.get('/music/search', controllerMusic.getSongBySearch);
  // routerMusic.post('/music/:id', controllerMusic.addToLikedSongs);
  // routerMusic.delete('/music/:id', controllerMusic.deleteLikedSongs);

  // Music search
  const url = 'http://localhost:3000/music/search';

  $('#music-search').submit((event) => {
    console.log('search is clicked');
    event.preventDefault();

    $.ajax({
      type: 'GET',
      url,
      data,
      dataType: 'json',
    })
      .done((result) => {
        console.log(result);
      })
      .fail((err) => {
        console.log(err);
      });
  });
});
