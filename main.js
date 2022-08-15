import { searchMovie } from "./src/pages/search/index.js";
import { home } from "./src/pages/home/index.js";

// Manipula o comportamento padrão do form quando aperta enter.
document.getElementById("barSearch")
    .addEventListener("keydown", input => {
        if (input.key === "Enter") {
            input.preventDefault();
            document.getElementById("btnSearch").click();
        };
    });

document.getElementById("btnHome")
    .addEventListener("click", home);

document.getElementById("btnSearch")
    .addEventListener("click", searchMovie);