export const getCategoryMovies = async (categoryURL: string) => {
  try {
    const response = await fetch(categoryURL, {
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

    return data.results
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
