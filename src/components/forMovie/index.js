// Arrow functions para criar elementos do filme selecionado.

import { createElement, createElementWithText, createDefinitionList } from "../creatingElements/index.js";

const headerMovie = movie => {
    const { Title, Year, Runtime } = movie;
    const header = createElement("header");
    const items = [
        ratings(movie),
        createElementWithText("h1", Title),
        createElementWithText("p", `${Year} | ${Runtime}`),
    ];

    items.forEach(ele => header.appendChild(ele));
    return header;
};

// Cria as notas do filme, se houver.
const ratings = movie => {
    const divRatings = createElement("div", { class: "ratings" });
    const items = [];

    movie.Ratings.forEach(item => {
        if (item.Source === "Internet Movie Database") {
            const divIMDb = createElement("div", { class: "imdb" });
            const IMDb = [
                createElement("img", { src: "../../../public/IMDb.png" }),
                createElementWithText("p", `${item.Value}`)
            ].forEach(item => divIMDb.appendChild(item))

            items.push(divIMDb);
        };
        if (item.Source === "Rotten Tomatoes") {
            const divRotten = createElement("div", { class: "rotten" });
            const Rotten = [
                createElement("img", { src: "../../../public/Rotten.png" }),
                createElementWithText("p", `${item.Value}`)
            ].forEach(item => divRotten.appendChild(item))

            items.push(divRotten);
        };
    });

    items.forEach(item => divRatings.appendChild(item));
    return divRatings;
}

const plotMovie = movie => {
    const { Plot } = movie;
    const section = createElement("section", { class: "plot" });
    const items = [
        createElementWithText("h5", "Plot"),
        createElementWithText("p", Plot)
    ];

    items.forEach(ele => section.appendChild(ele));
    return section;
};

const productionMovie = movie => {
    const section = createElement("section", { class: "castAndGenre row row-cols-2" });
    const items = [
        createDefinitionList(movie, "Actors"),
        createDefinitionList(movie, "Genre"),
        createDefinitionList(movie, "Director")
    ];

    items.forEach(ele => section.appendChild(ele));
    return section;
};

const posterMovie = movie => {
    const { Poster, Title } = movie;
    const divPoster = createElement("div", { class: "poster" });
    const poster = createElement("img", { src: Poster, alt: Title });

    divPoster.appendChild(poster);
    return divPoster;
};

// Utiliza as arrow functions criadas aqui para gerar a página do filme selecionado.
const generateMovie = movie => {
    const divMovie = createElement("div", {
        id: "selectedMovie",
        class: "row row-cols-1 row-cols-sm-2 mx-auto"
    });
    const div = createElement("div");
    const header = headerMovie(movie);
    const plot = plotMovie(movie);
    const definitionsList = productionMovie(movie);
    const poster = posterMovie(movie);

    [header, plot, definitionsList].forEach(ele => div.appendChild(ele));
    [div, poster].forEach(ele => divMovie.appendChild(ele));

    document.getElementById("root").appendChild(divMovie);
};

export { headerMovie, plotMovie, productionMovie, posterMovie, generateMovie };