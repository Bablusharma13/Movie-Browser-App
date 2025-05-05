import { Link } from 'react-router-dom'

const MovieCard = ({ movie, onFavorite, isFavorite }) => (
  <div className="bg-white shadow p-4 rounded w-64">
    <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover" />
    <h3 className="mt-2 font-bold">{movie.Title}</h3>
    <p>{movie.Year}</p>
    <div className="flex justify-between mt-2">
      <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 hover:underline">
        More Info
      </Link>
      <button onClick={() => onFavorite(movie)} className="text-red-500">
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  </div>
)

export default MovieCard
