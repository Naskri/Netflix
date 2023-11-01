import { MOVIES_API } from '../../Movies/MoviesServices/MoviesAPI'
import { MoviesSchema } from '../../Movies/MoviesServices/MoviesSchema'

const generateRandomMovieNumber = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomMovie = async () => {
  try {
    const response = await fetch(MOVIES_API.POPULAR_MOVIES.url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`${response.status} : ${response.statusText}`)
    }

    const data = await response.json()

    const parsedData = MoviesSchema.parse(data)

    return parsedData.results[generateRandomMovieNumber()]
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
