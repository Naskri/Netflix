const TV_SERIES_API_URL = 'https://api.themoviedb.org/3/'

export const TV_SERIES_API = {
  POPULAR_SERIES: {
    name: 'popular',
    url: `${TV_SERIES_API_URL}tv/popular?language=${navigator.language}`,
  },
  COMEDY_SERIES: {
    name: 'comedy',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=35&language=${navigator.language}`,
  },
  TOP_RATED: {
    name: 'top-rated',
    url: `${TV_SERIES_API_URL}/tv/top_rated?language=${navigator.language}`,
  },
  KIDS_SERIES: {
    name: 'kids',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=10762&language=${navigator.language}`,
  },
  ACTION_SERIES: {
    name: 'action',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=10759&language=${navigator.language}`,
  },
  MYSTERY_SERIES: {
    name: 'mystery',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=9648&language=${navigator.language}`,
  },
}
