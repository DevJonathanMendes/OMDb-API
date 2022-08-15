import { api } from "../../services/api.js";
import { removeById } from "../../components/creatingElements/index.js";
import { createListItem } from "../../components/forSearch/index.js";
import { showMovie } from "../movie/index.js";
import { home } from "../home/index.js";

// Add o evento aos elementos.
const addShowMovie = () => {
  document.getElementById('movieList')
    .addEventListener('click', showMovie);
};

let oldTitle, movie;

// Exibe a pesquisa do filmes.
export const searchMovie = async () => {
  const movieTitle = document.getElementById("barSearch");
  const condition = movieTitle.value.length > 0 && movieTitle.value != oldTitle;

  if (condition) {
    try {
      movie = api(`?s=${movieTitle.value.trim()}`)
        .then(res => res["Search"]);
      oldTitle = movieTitle.value;
    } catch (erro) {
      console.log(erro);
      home();
    }
  }

  if (!document.getElementById("movieList") || condition) {
    await movie.then(res => {
      removeById(["movieList", "selectedMovie", "logo"]);
      res.forEach(ele => { createListItem(ele); });
    });
  }

  addShowMovie();
};