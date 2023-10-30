const TV_SERIES_API_URL = 'https://api.themoviedb.org/3/'

export const TV_SERIES_API = {
  POPULAR_SERIES: {
    name: 'popular',
    url: `${TV_SERIES_API_URL}tv/popular`,
  },
  COMEDY_SERIES: {
    name: 'comedy',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=35`,
  },
  TOP_RATED: {
    name: 'top-rated',
    url: `${TV_SERIES_API_URL}/tv/top_rated`,
  },
  KIDS_SERIES: {
    name: 'kids',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=10762`,
  },
  ACTION_SERIES: {
    name: 'action',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=10759`,
  },
  MYSTERY_SERIES: {
    name: 'mystery',
    url: `${TV_SERIES_API_URL}discover/tv?page=1&with_genres=9648`,
  },
}
