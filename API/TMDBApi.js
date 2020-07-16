const API_TOKEN = "30de34ef036f22d9cb5073190ac22015";

export const getFilmsFromApiWithSearchedText = (text, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
};

export const getImageFromApi = (name) => {
    return `https://image.tmdb.org/t/p/w300${name}`;
};

export const getFilmDetailFromApi = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
};