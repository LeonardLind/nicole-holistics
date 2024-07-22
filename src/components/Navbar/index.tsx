import { Link, useLocation } from 'react-router-dom';
import {
  LogoDiscord,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  MenuOutline,
} from 'react-ionicons';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Books', path: '/books' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full lg:px-12 p-5 lg:h-24 h-20 border-b border-navBorder flex items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer"
        />
      </Link>
      <div className="lg:flex hidden items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`${
              location.pathname === item.path ? 'text-primary' : 'text-secondary'
            } font-Urbanist font-semibold text-lg cursor-pointer`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="lg:flex hidden items-center gap-7">
        <LogoFacebook cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
        <LogoInstagram cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
        <LogoLinkedin cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
        <LogoDiscord cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
      </div>
      <div className="cursor-pointer lg:hidden block">
        <MenuOutline
          cssClasses={"!fill-secondary !text-secondary"}
          width={"32px"}
          height={"32px"}
        />
      </div>
    </div>
  );
};

export default Navbar;