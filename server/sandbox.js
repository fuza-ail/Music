const axios = require("axios");


axios({
    "method":"GET",
    "url":"https://private-anon-8be88db5ae-lyricsovh.apiary-proxy.com/v1/Coldplay/Adventure%20of%20a%20Lifetime",
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
      console.log(error)
    })
