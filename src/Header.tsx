import './Header.scss';
import finsweet from './Finsweet.svg';
import arrow from '../src/pages/Landing/components/FirstPart/assets/Icon.svg';


export const Header = () => {
  return (
    <header>
      <div className="header">
        <img src={finsweet} alt="finsweet" />

        <nav>
          <a href="#" className="className_header">
            Home
          </a>
          <a href="#" className="className_header">
            Service
          </a>
          <a href="#" className="className_header">
            Company
          </a>
          <a href="#" className="className_header">
            Career
          </a>
          <a href="#" className="className_header">
            Blog
          </a>
          <a href="#" className="className_header">
            Contact us
          </a>
          <a href="#" className="icon_link">
            Clone project
          </a>
          <img src={arrow} alt="arrow" />

        </nav>
        <button className="burger-menu mobile-only">...</button>
      </div>
    </header>
  );
};
