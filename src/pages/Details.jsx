import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieDetails } from '../services/api'

const Details = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getMovieDetails(id).then(setMovie)
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <img src={movie.Poster} alt={movie.Title} className="w-full mb-4" />
      <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Ratings:</strong> {movie.Ratings.map(r => `${r.Source}: ${r.Value}`).join(', ')}</p>
    </div>
  )
}

export default Details
