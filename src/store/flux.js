
import { fetchMovies, fetchSeries, fetchActors} from '@api/request'
import { URL } from '@api/config'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      movies: [],
      peoples: [],
      tvs: [],
      active_tvs: undefined,
      active_peoples: undefined,
      active_movies: undefined,
      lang: URL.LANG_ES,
      page: URL.PAGE
		},
		actions: {
      

      loadAll: (lang, page) => {
        
        fetchMovies(lang,page)
        .then((data) => {
          console.log('movies',data);
          getActions().setListMovies(data.results, data);
        })

        fetchActors(lang)
        .then((data) => {
          // console.log(data);
          getActions().setListPeoples(data.results);
        })

        fetchSeries(lang)
        .then((data) => {
          // console.log(data);
          getActions().setListTvs(data.results);
        })
      },
      page: (page) =>{
        setStore({ page: page})
      },
      loadMovie: () => {

      },
      setListMovies: (lista, lista2) => {
        setStore({ movies: lista, paginatemovies: lista2 });
      },
      setListTvs: (lista) => {
        setStore({ tvs: lista });
      },
      setListPeoples: (lista) => {
        setStore({ peoples: lista });
      },
		}
	};
};

export default getState;