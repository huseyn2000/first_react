import './Header.scss';
import finsweet from './Finsweet.svg';
import arrow from '../src/pages/Landing/components/FirstPart/assets/Icon.svg';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={finsweet} alt="finsweet" />

        <nav>
          <Link to="/landing" className="className_header">
            Home
          </Link>
          <Link to="/" className="className_header">
            Service
          </Link>
          <Link to="/" className="className_header">
            Company
          </Link>
          <Link to="/" className="className_header">
            Career
          </Link>
          <Link to="/blogpage" className="className_header">
            Blog
          </Link>
          <Link to="/" className="className_header">
            Contact us
          </Link>
          <Link to="/" className="icon_link">
            Clone project
          </Link>
          <img src={arrow} alt="arrow" />

        </nav>
        <button className="burger-menu mobile-only">...</button>
      </div>
    </header>
  );
};
