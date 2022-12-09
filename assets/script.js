const searchBar = document.getElementById("search-bar");
const searchResults = [];
const characterName = document.getElementById('characterName');
const characterDescription = document.getElementById('characterDescription');
const searchBtn = document.getElementById('searchBtn');


//Call to the Youtube API

// let youtubeURL = "https://www.googleapis.com/youtube/v3/search?maxResults=7&key=" + youtubeApiKey + "&q=marvel&q=" + marvelCharacter;
youtubeApiKey = "AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM";

function getApi() {
  let testyoutubeURL = "https://www.googleapis.com/youtube/v3/search?maxResults=7&key=AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM&q=marvel&q=spiderman";
    fetch(testyoutubeURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
       console.log(data)
        }
       )};

getApi();


//Input search data in marvel URL and display 

const M_PRIV_KEY = '9f9f694ad34c04e74f623d0113c1a65d9fa75cb1';
const M_PUBLIC_KEY = '4565e4658e4d5bd74420b0139cfdd052';
function searchCharacter() {
  let ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + M_PRIV_KEY + M_PUBLIC_KEY).toString();

  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?name=${searchBar.value}&ts=${ts}&apikey=${M_PUBLIC_KEY}&hash=${hash}`
  )

    .then((response) => response.json())
    .then ((data) => {
      console.log(data);
      displayHeroInfo(data)
    });
}

function displayHeroInfo(data) {
  const heroName = data.data.results[0].name
  const heroDescription = data.data.results[0].description
  const heroImage = data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension


  characterName.textContent = heroName;
  characterDescription.textContent = heroDescription;
  document.getElementById('Characterimage').src = heroImage;
}



//Save Searches into Local Storage
function saveSearch() {
  localStorage.setItem("recent-searches", JSON.stringify(searchResults));
}


//Searches When Search Button is Clicked
searchBtn.addEventListener('click', function(event){
  event.preventDefault();

  const newSearch = searchBar.value;
  
  searchResults.push(newSearch);

  saveSearch();
  searchCharacter();
 
});

//Searches when Enter Key is Pressed

searchBar.addEventListener('keypress', function(e){
  if (e.key === 'Enter'){
  const newSearch = searchBar.value;
  
  searchResults.push(newSearch);

  saveSearch();
  searchCharacter();

  }
});












