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

  // Auths from @2maleek and @fuza-ail
  // ==========

  // defaults
  $('#logout').hide();
  $('#second-cell').hide();
  $('#third-cell').hide();

  // register
  $('#register').on('submit', (e) => {
    e.preventDefault();
    register();
  });

  // logins
  // ======
  // BASIC
  $('#login').on('submit', (e) => {
    e.preventDefault();
    login();

    // show hide
    // =========
    // TOP
    $('#sign-in-top').hide();
    $('#logout').show();
    // CONTENT
    $('#second-cell').show();
    $('#third-cell').show();
  });
  // Google
  $('#google-login').on('click', (e) => {
    e.preventDefault();

    // show hide
    // =========
    $('#sign-in-top').hide();
    $('#logout').show();
    $('#first-cell').hide();
    // CONTENT
    $('#second-cell').show();
    $('#third-cell').show();
  });

  // logout
  $('#logout').on('click', (e) => {
    e.preventDefault();
    logout();

    // show hide
    // =========
    $('#first-cell').show();
    $('#logout').hide();
    $('#second-cell').hide();
    $('#third-cell').hide();
  });
});

// register funtion - @2maleek
const register = () => {
  let data = {
    email: $('#emailRegister').val(),
    password: $('#passwordRegister').val(),
  };
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/register',
    data: data,
    dataType: 'json',
  })
    .done(function (token) {
      console.log(token.access_token);
      localStorage.setItem('access_token', token.access_token);

      // remove drops
      $('.dropdown').toggleClass('is-active');

      // swal
      Swal.fire('Thank you!', 'Register success', 'success');
    })
    .fail(function (err) {
      console.log(err.responseJSON.errors[0].message);

      // swal
      Swal.fire('oops!', `${err.responseJSON.errors[0].message}`, 'error');
    });
};

// login - @2maleek
const login = () => {
  let data = {
    email: $('#emailLogin').val(),
    password: $('#passwordLogin').val(),
  };
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/login',
    data: data,
    dataType: 'json',
  })
    .done(function (token) {
      console.log(token.access_token);
      localStorage.setItem('access_token', token.access_token);

      $('#first-cell').hide();
    })
    .fail(function (err) {
      if (err.status === 500) {
        console.log('Internal server error!');

        Swal.fire('Lah dalah!', 'Internal server error', 'error');
      } else {
        console.log(err.responseJSON.error);

        Swal.fire('Eits!', 'Did your username/password is correct?', 'question');
      }
    });
};

// Google login - @fuza-ail
const onSignIn = (googleUser) => {
  let profile = googleUser.getBasicProfile();
  let id_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/loginGoogle',
    data: {
      token: id_token,
    },
    statusCode: {
      200: function (response) {
        localStorage.setItem('access_token', response.access_token);
      },
    },
  });
};

// logout - @2maleek
const logout = () => {
  localStorage.removeItem('access_token');
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });

  Swal.fire('Log Out!', 'successfully logged out!', 'success');
};
