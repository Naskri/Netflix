import i18next from 'i18next'

const MOVIES_API_URL = 'https://api.themoviedb.org/3/'

export const MOVIES_API = {
  POPULAR_MOVIES: {
    name: 'popular',
    url: `${MOVIES_API_URL}movie/popular?language=${i18next.language || navigator.language}`,
  },
  HORROR_MOVIES: {
    name: 'horror',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=27&language=${
      i18next.language || navigator.language
    }`,
  },
  UPCOMING: {
    name: 'upcoming',
    url: `${MOVIES_API_URL}/movie/upcoming?language=${i18next.language || navigator.language}`,
  },
  COMEDIES_MOVIES: {
    name: 'comedies',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=35&language=${
      i18next.language || navigator.language
    }`,
  },
  ACTION_MOVIES: {
    name: 'action',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=28&language=${
      i18next.language || navigator.language
    }`,
  },
  ANIMATION_MOVIES: {
    name: 'animation',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=16&language=${
      i18next.language || navigator.language
    }`,
  },
  MYSTERY_MOVIES: {
    name: 'mystery',
    url: `${MOVIES_API_URL}discover/movie?page=1&with_genres=9648&language=${
      i18next.language || navigator.language
    }`,
  },
}
