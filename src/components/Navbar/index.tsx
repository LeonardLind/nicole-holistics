import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LogoDiscord,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  MenuOutline,
  CloseOutline,
} from 'react-ionicons';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Books', path: '/books' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsMenuVisible(false), 300); // Match with fadeOut duration
    } else {
      setIsMenuVisible(true);
      setTimeout(() => setIsMenuOpen(true), 0); // Delay to trigger animation
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuVisible(false), 300); // Match with fadeOut duration
  };

  return (
    <nav className="w-full lg:px-12 px-5 py-5 lg:py-0 lg:h-24 h-20 border-b border-gray-300 flex items-center justify-between relative bg-white">
      <Link to="/">
        <img src={logo} alt="logo" className="cursor-pointer h-10 lg:h-auto" />
      </Link>
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`${
              location.pathname === item.path ? 'text-primary' : 'text-secondary'
            } font-urbanist font-semibold text-lg cursor-pointer`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-7">
        <LogoFacebook cssClasses="text-secondary cursor-pointer" />
        <LogoInstagram cssClasses="text-secondary cursor-pointer" />
        <LogoLinkedin cssClasses="text-secondary cursor-pointer" />
        <LogoDiscord cssClasses="text-secondary cursor-pointer" />
      </div>
      <div className="lg:hidden block cursor-pointer z-50" onClick={toggleMenu}>
        {isMenuOpen ? (
          <CloseOutline width="32px" height="32px" />
        ) : (
          <MenuOutline width="32px" height="32px" />
        )}
      </div>

      {isMenuVisible && (
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-4 p-5 z-40 transition-opacity duration-300 ease-out ${
            isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={handleLinkClick}
              className={`${
                location.pathname === item.path ? 'text-primary' : 'text-secondary'
              } font-urbanist font-semibold text-xl cursor-pointer`}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex items-center gap-7 mt-4">
            <LogoFacebook cssClasses="text-secondary cursor-pointer" />
            <LogoInstagram cssClasses="text-secondary cursor-pointer" />
            <LogoLinkedin cssClasses="text-secondary cursor-pointer" />
            <LogoDiscord cssClasses="text-secondary cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
