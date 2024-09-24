import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="w-full py-4 px-8 bg-customDark text-customLight flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link to="/">Russell Page</Link>
            </div>
            <ul className="flex space-x-6 text-lg">
                <li>
                    <Link to="/about" className="hover:text-customAccent">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:text-customAccent">
                        Projects
                    </Link>
                </li>
                <li>
          <Link to="/contact" className="hover:text-customAccent">
            Contact
          </Link>
        </li>
            </ul>
        </nav>
    );
};

export default NavBar;
