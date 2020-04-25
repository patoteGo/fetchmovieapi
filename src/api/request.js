import { URL } from '@api/config'

export const fetchMovies = () => {
    return fetch(`${URL.BASE}/movie/popular${URL.TOKEN}${URL.LANG_ES}`).then((resp) => resp.json());
}

export function fetchSeries ()  {
    return fetch(`${URL.BASE}/tv/popular${URL.TOKEN}${URL.LANG_ES}`).then((resp) => resp.json());
}

export function fetchActors ()  {
    return fetch(`${URL.BASE}/person/popular${URL.TOKEN}${URL.LANG_ES}`).then((resp) => resp.json());
}