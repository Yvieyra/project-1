

let searchBar = document.getElementById("searchBar");
const name = document.getElementById('characterName');
const description = document.getElementById('characterDescription');
const searchBtn = document.getElementById('searchBtn')

const youtubeVideo = document.getElementById('youtubeVideo')
//Call to the Youtube API

const kateApiKey = "AIzaSyAEoS8iWmmJmS6P5yIJ7lF2fijwJRn0QQQ";
const yesseniaApiKey = "AIzaSyDiZT7hR0Bp8rjOlzMHm-ui5l78gOwe1dg";
const andyApiKey = "AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM";

// let testyoutubeURL = "https://www.googleapis.com/youtube/v3/search?maxResults=1&key=AIzaSyDiZT7hR0Bp8rjOlzMHm-ui5l78gOwe1dg&q=marvel&q=IronMan";

function getApi() {
  marvelCharacter = localStorage.getItem("searches");
  console.log(marvelCharacter);
  let youtubeURL = `https://www.googleapis.com/youtube/v3/search?maxResults=1&key=${yesseniaApiKey}&q=marvel&q=${marvelCharacter}`;
  fetch(youtubeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.items[0].id.videoId)
      let videoId = data.items[0].id.videoId
      youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?rel=0`
    }
    )
};


//Call to the Marvel API
const M_PRIV_KEY = '9f9f694ad34c04e74f623d0113c1a65d9fa75cb1';
const M_PUBLIC_KEY = '4565e4658e4d5bd74420b0139cfdd052';

function getMarvelResponse() {

  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + M_PRIV_KEY + M_PUBLIC_KEY).toString();


  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?&ts=${ts}&apikey=${M_PUBLIC_KEY}&hash=${hash}`
  )

    .then((response) => response.json())
    .then ((data) => console.log(data));
};

getMarvelResponse();


//Save Searches into Local Storage

function saveSearch(character) {
  localStorage.setItem("searches", JSON.stringify(character));
}

//Searches When Enter Key is Pressed
// searchBar.addEventListener('keypress', function(e){
//   if (e.key === 'Enter'){
//   const newSearch = e.searchBar.value;

//   searchResults.push(newSearch);

//   saveSearch();
//   }
// })

//Searches When Search Btn is Pressed *IN PROGRESS*
searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const newSearch = searchBar.value;
  saveSearch(newSearch);
  getApi();
})

function saveSearch() {
  localStorage.setItem("recent-searches", JSON.stringify(searchResults));
}



 









