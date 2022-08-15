import { api } from "../../services/api.js";
import { removeById } from "../../components/creatingElements/index.js";
import { generateMovie } from "../../components/forMovie/index.js";

let movie, oldId;

// Exibe o filme selecionado.
export const showMovie = async idMovie => {
    if (idMovie.target.id != oldId) {
        try {
            movie = api(`?i=${idMovie.target.id}`);
            oldId = idMovie.target.id;
        } catch (err) {
            console.log(err);
        }
    }

    if (!document.getElementById("selectedMovie")) {
        await movie.then(res => {
            removeById(["movieList", "selectedMovie"]);
            generateMovie(res);
        });
    }
};