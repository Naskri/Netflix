const VIDEO_API_URL = 'https://api.themoviedb.org/3/'

type VideoProps = {
  movieID: number
  type: string
}

export const getVideo = async ({ movieID, type }: VideoProps) => {
  try {
    const response = await fetch(
      `${VIDEO_API_URL}${type === 'serie' ? 'tv' : type}/${movieID}/videos?language=${
        navigator.language
      }`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      }
    )

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
