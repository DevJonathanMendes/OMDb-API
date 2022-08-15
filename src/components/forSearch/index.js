import { createElement, createElementWithText } from "../creatingElements/index.js";

// Cria uma lista indefinida("ul") se não existir.
const checkList = () => {
    if (!document.getElementById("movieList")) {
        const ul = createElement("ul", {
            id: "movieList",
            class: "row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 list-unstyled"
        });
        document.getElementById("root").appendChild(ul);
    };
};

// Cria um item("li").
const createListItem = movie => {
    checkList();
    const ul = document.getElementById("movieList");
    const { Title, Year, imdbID, Poster } = movie;

    const li = createElement("li");
    const divMovie = createElement("div", { class: "movie" });

    const img = createElement("img", {
        id: imdbID,
        class: "img-fluid",
        src: Poster,
        alt: Title
    });

    const divDetail = createElement("div", { class: "detail" });
    const divStrong = createElementWithText("strong", Title);
    const divSpan = createElementWithText("span", Year);

    [divStrong, divSpan].forEach(ele => { divDetail.appendChild(ele) });
    [img, divDetail].forEach((ele) => divMovie.appendChild(ele));
    li.appendChild(divMovie);
    ul.appendChild(li);
};

export { checkList, createListItem };