const API_KEY = 'your_omdb_api_key'

export const searchMovies = async () => {
  const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page=1`)
  return res.json()
}

export const getMovieDetails = async ({ params }) => {
  const id = params.movieID
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
  return res.json()
}


