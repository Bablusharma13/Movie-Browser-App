import { useState } from 'react'
import { searchMovies } from '../services/api'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

  const handleSearch = async () => {
    const data = await searchMovies(query)
    setResults(data.Search || [])
  }

  const toggleFavorite = (movie) => {
    const updated = favorites.find(m => m.imdbID === movie.imdbID)
      ? favorites.filter(m => m.imdbID !== movie.imdbID)
      : [...favorites, movie]

    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Search movies..."
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavorite={toggleFavorite}
            isFavorite={favorites.some(m => m.imdbID === movie.imdbID)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
