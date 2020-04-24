const URL_API = 'https://api.themoviedb.org/3';
const TOKEN = '?api_key=7aa5c83c18833d3dd238b20bc192d730';
const LANG = '&language=es-ES';
// https://api.themoviedb.org/3/movie/popular?api_key=7aa5c83c18833d3dd238b20bc192d730&language=en-US&page=1
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      movies: [],
      people: [],
      genre: [],
      active: undefined
		},
		actions: {
      loadMovies: () => {
        fetch(`${URL_API}/movie/popular${TOKEN}${LANG}`).then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          getActions().setListMovies(data.results);
        })
      },

      // loadMovie: (id) => {
      //   fetch(`${URL_API}/character/${id}`).then((resp) => resp.json())
      //   .then((data) => {
      //     console.log(data);
      //     setStore({ active: data });
      //   })
      // },
      setListMovies: (lista) => {
        setStore({ movies: lista });
      },
		}
	};
};

export default getState;