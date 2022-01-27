let Btm =document.getElementById("btm");
//Popular movies
function popular() {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9f0cfeb8e538a273a67f84f01b3b30e8&language=en-US&page=1`)
    .then((res) => {
      var movies = res.data.results; 
      movies.map(movie =>{
        console.log(movie.id);
      })
      getData(movies);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Upcoming movies
function upcoming() {
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=9f0cfeb8e538a273a67f84f01b3b30e8&language=en-US&page=1`)
    .then((res) => {
      var movie = res.data.results;
      getData(movie);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Movie language
function fetchmoviebylang(lang) {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=9f0cfeb8e538a273a67f84f01b3b30e8&with_original_language=${lang}`)
      .then((res) => {
        var movie = res.data.results;
        getData(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

//Movie details
function getData(movie) {
  var result = "";
  movie.forEach(function (e) {
    result += 
    `<div class="grid">
    <div class="movieDetail">
    <div class="details">
    <h2>${e.original_title}</h2>
    <p>${e.release_date}</p>
    </div>
    <img src=${"https://image.tmdb.org/t/p/w500" + e.poster_path}>
    <p><img src="./img/heart.png"></img> ${e.vote_count}</p>
    </div>
    </div>`;
  });
  Btm.innerHTML = result;
}

window.onload=()=>{
  upcoming();
}