import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(stored)
  }, [])

  const removeFavorite = (movie) => {
    const updated = favorites.filter(m => m.imdbID !== movie.imdbID)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Favorite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavorite={removeFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
