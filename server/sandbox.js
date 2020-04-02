const axios = require("axios");

let keyword = 'Kanye West';
axios({
    "method":"GET",
    "url":`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&classificationName=music&apikey=qjdwY0n3PvucUYlBvyEktMp8YAiFoAD7`,
    })
    .then((result)=>{
        if (result.data._embedded){
          let events = result.data._embedded.events;
          console.log(events.length)
          if(events.length > 5){
            events = events.splice(0,5);
          }
          events.forEach(event =>{
            console.log(event.name)
            console.log(event.url)
            console.log(event.dates.start.localDate)
            console.log(event.dates.start.localTime)
            console.log('')
          })  
        }
    })
    .catch((error)=>{
      console.log(error)
    })