import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex gap-4">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/favorites" className="hover:underline">Favorites</Link>
  </nav>
)

export default Navbar
