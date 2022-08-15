import { API_KEY } from "../../API_KEY.js";

// Get API.
export const api = async string => {
    return await fetch(`https://www.omdbapi.com/${string}&apikey=${API_KEY}&`)
        .then(res => res.json())
};