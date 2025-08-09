import { Link } from "react-router-dom";
import logo from '../assets/images/logopng.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md p-4 flex justify-between items-center px-6 shadow-md">
      <Link to="/">
            <img src={logo} alt="Logo" className="h-10 mb-2 object-contain" />
      </Link>

      <nav className="space-x-4 flex items-center">
        <Link to="/login" className="text-blue-800 hover:underline">
          Log in
        </Link>
        <Link to="/services" className="text-blue-800 hover:underline">
          Services
        </Link>
        <Link to="/about" className="text-blue-800 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
