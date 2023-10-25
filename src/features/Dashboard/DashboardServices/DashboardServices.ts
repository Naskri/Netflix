import { DashboardAPI } from '../DashboardAPI'

const generateRandomMovieNumber = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomMovie = async () => {
  try {
    const response = await fetch(DashboardAPI.randomMovie, {
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

    return data.results[generateRandomMovieNumber()]
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
