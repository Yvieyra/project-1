let marvelURL = "https://gateway.marvel.com/v1/public/characters?apikey=4565e4658e4d5bd74420b0139cfdd052"
marvelapiKey = "apikey=4565e4658e4d5bd74420b0139cfdd052"
let youtubeURL = 
youtubeapiKey = "AIzaSyDn_KcYLj85JrrXViRDy3henvgOhRsREdM";

fetch(marvelURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      };
    });




    