

//Call to the Youtube API

let youtubeURL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true?api_key=AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM"
youtubeapiKey = "AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM";

function getApi() {
    let youtubeURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM&q=marvel";
    fetch(youtubeURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
       console.log(data)
        }
       )};

getApi();


//Call to the Marvel API
const M_PRIV_KEY = "9f9f694ad34c04e74f623d0113c1a65d9fa75cb1";
const M_PUBLIC_KEY = "4565e4658e4d5bd74420b0139cfdd052";

function getMarvelResponse() {
                                                                                  
  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + M_PRIV_KEY + M_PUBLIC_KEY).toString();

  let url = 'https://gateway.marvel.com:443/v1/public/characters?';

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: M_PUBLIC_KEY,
    hash: hash,
    })
    .done(function(data) {
      console.log(data);
    })
};

getMarvelResponse();

