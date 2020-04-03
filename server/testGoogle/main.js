// GOOGLE
function onSignIn(googleUser) {
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
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    localStorage.removeItem('access_token');
  });
}

//FACEBOOK
window.fbAsyncInit = function () {
  FB.init({
    appId: '2501472430094715',
    cookie: true,
    xfbml: true,
    version: 'v6.0',
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });

  FB.api('me?fields=id,email', function (response) {});
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

function statusChangeCallback(res) {
  if (res.status == 'connected') {
    console.log('logged in');

    testAPI();
  } else {
    console.log('unauthenticated');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function testAPI() {
  FB.api('me?fields=id,email', function (response) {
    $.ajax({
      method: 'POST',
      data: {
        email: response.email,
      },
      url: 'http://localhost:3000/loginFacebook',
    })
      .done(function (data) {
        localStorage.setItem('access_token', data.access_token);
      })
      .fail(function (err) {
        console.log(err);
      });
  });
}

function logoutfb() {
  FB.logout(function (response) {
    localStorage.removeItem('access_token');
  });
}
