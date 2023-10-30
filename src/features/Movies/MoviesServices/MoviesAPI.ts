const MOVIES_API_URL = 'https://api.themoviedb.org/3/'

export const MOVIES_API = {
  POPULAR_MOVIES: {
    name: 'popular',
    url: `${MOVIES_API_URL}movie/popular`,
  },
  HORROR_MOVIES: {
    name: 'horror',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=27`,
  },
  UPCOMING: {
    name: 'upcoming',
    url: `${MOVIES_API_URL}/movie/upcoming`,
  },
  COMEDIES_MOVIES: {
    name: 'comedies',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=35`,
  },
  ACTION_MOVIES: {
    name: 'action',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=28`,
  },
  ANIMATION_MOVIES: {
    name: 'animation',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=16`,
  },
  MYSTERY_MOVIES: {
    name: 'mystery',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=9648`,
  },
}
