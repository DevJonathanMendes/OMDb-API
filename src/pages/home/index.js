import { removeById, createElement } from "../../components/creatingElements/index.js";

// Exibe a tela inicial.
export const home = () => {
    if (!document.getElementById("logo")) {
        const div = createElement("div", {
            id: "logo",
            class: "container my-auto"
        });

        const logo = createElement("img", {
            class: "img-fluid",
            src: "../../public/logo.png",
            alt: "Logo-TakeMovie"
        });

        removeById(["movieList", "selectedMovie"]);
        div.appendChild(logo);
        document.getElementById("root").appendChild(div);
    };
};