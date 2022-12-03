let marvelURL = "https://gateway.marvel.com/v1/public/characters?apikey=4565e4658e4d5bd74420b0139cfdd052"
marvelapiKey = "4565e4658e4d5bd74420b0139cfdd052"

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

      






