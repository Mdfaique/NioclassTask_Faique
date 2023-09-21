import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-4">
          <span className="text-white font-semibold text-xl tracking-tight">
            Nioclass
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <button className="py-2 px-4 bg-sky-300 hover:bg-sky-400 rounded shadow">Start Test</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
