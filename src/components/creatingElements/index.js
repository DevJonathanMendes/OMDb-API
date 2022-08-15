// Remove elementos do DOM pelo id.
const removeById = id => {
    id.forEach(id => {
        const element = document.getElementById(id);
        if (element) { element.remove(); };
    });
};

// Checa se existe uma lista indefinida("ul") no DOM, caso não, cria uma.
const checkList = () => {
    if (!document.getElementById("movieList")) {
        const ul = createElement("ul", {
            id: "movieList",
            class: "row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 list-unstyled"
        });
        document.getElementById("root").appendChild(ul);
    };
};

// Cria elementos para para o DOM.
const createElement = (elementName, attributes = {}) => {
    const element = document.createElement(elementName);
    const attributesArray = Object.entries(attributes);

    attributesArray.forEach(([key, value]) => element.setAttribute(key, value));
    return element;
};

// Cria elementos com texto para o DOM.
const createElementWithText = (elementName, textContent) => {
    const element = createElement(elementName);
    element.textContent = textContent;

    return element;
};

// Cria uma lista de definição("dl").
const createDefinitionList = (movie, property) => {
    const propertyArray = movie[property].split(", ");
    const dl = createElement("dl");
    const items = [createElementWithText("dt", property)];

    propertyArray.forEach((ele, index) => {
        ele = createElementWithText("dd", ele);
        items[index + 1] = ele;
    });

    items.forEach(ele => dl.appendChild(ele));
    return dl;
};

export { removeById, checkList, createElement, createElementWithText, createDefinitionList };