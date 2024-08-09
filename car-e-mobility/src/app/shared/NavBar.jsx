import CarELogo from '../../assets/images/logo-small.png';
import { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-20 top-0 start-0 shadow-zinc-400/10 ease-in-out duration-300" id='NavBar'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-12">
        <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
          <img src={CarELogo} className="h-12" alt="Car-e Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Car-e Mobility</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden md:block bg-white border-[0.9px] hover:bg-zinc-100 duration-300 ease-in-out border-zinc-800 rounded-full px-6 py-[10px] text-sm font-medium"
          >
            Pre-registro
          </button>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-sticky"
            data-collapse-toggle="navbar-sticky"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-0 md:space-x-2">
            <li>
              <a href="#" className="block py-2 px-3 text-sm" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-sm" aria-current="page">Nosotros</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-sm" aria-current="page">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
