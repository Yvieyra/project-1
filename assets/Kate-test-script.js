const searchBar = document.getElementById("search-bar");
const searchResults = [];
const characterName = document.getElementById('characterName');
const characterDescription = document.getElementById('characterDescription');
const searchBtn = document.getElementById('searchBtn');

//Call to the Marvel API
const M_PRIV_KEY = '9f9f694ad34c04e74f623d0113c1a65d9fa75cb1';
const M_PUBLIC_KEY = '4565e4658e4d5bd74420b0139cfdd052';

function getMarvelResponse(event) {
                                                                                  
        let ts = new Date().getTime();
        var req = new XMLHttpRequest();
        let hash = CryptoJS.MD5(ts + M_PRIV_KEY + M_PUBLIC_KEY).toString();
        var website = 'http://gateway.marvel.com/v1/public/characters?name=hulk'
        var name = searchBar.value;
        var web = website + name + "ts=" + ts + "&apikey=" + M_PUBLIC_KEY + "&hash=" + hash;

        console.log(web)

        searchBtn.addEventListener('click', function (event) {
            searchBar.textContent = "";
            heroDescription.textContent = "";
        });
        req.open('GET', web, true);
    
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function() {
        if(req.status >= 200 && req.status < 400) {
            var result = JSON.parse(req.responseText);
            characterName.textContent = result.name;
            characterDescription.textContent = result.description;
        }
    
    event.preventDefault()
    });
    
    req.send(null);
};

getMarvelResponse();







//Save Searches into Local Storage
function saveSearch() {
  localStorage.setItem("searches", JSON.stringify(searchResults));
}

//Searches When Enter Key is Pressed
searchBar.addEventListener('keypress', function(e){
  if (e.key === 'Enter'){
  const newSearch = searchBar.value;
  
  searchResults.push(newSearch);

  saveSearch();
  } else {
    return;
  }
});

