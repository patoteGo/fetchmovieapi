
import { fetchMovies, fetchSeries, fetchActors} from '@api/request'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      movies: [],
      peoples: [],
      tvs: [],
      active: undefined
		},
		actions: {
      loadAll: () => {
        fetchMovies()
        .then((data) => {
          console.log(data);
          getActions().setListMovies(data.results);
        })

        fetchActors()
        .then((data) => {
          console.log(data);
          getActions().setListPeoples(data.results);
        })

        fetchSeries()
        .then((data) => {
          console.log(data);
          getActions().setListTvs(data.results);
        })
      },

      setListMovies: (lista) => {
        setStore({ movies: lista });
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