import { URL } from '@api/config'
// import { Context } from "@store/appContext";
// import { useContext, useEffect } from 'react'


export const fetchMovies = (lang, page) => {
    return fetch(`${URL.BASE}/movie/popular${URL.TOKEN}${lang}${page}`).then((resp) => resp.json());
}

export function fetchSeries (lang)  {
    return fetch(`${URL.BASE}/tv/popular${URL.TOKEN}${lang}`).then((resp) => resp.json());
}

export function fetchActors (lang)  {
    return fetch(`${URL.BASE}/person/popular${URL.TOKEN}${lang}`).then((resp) => resp.json());
}