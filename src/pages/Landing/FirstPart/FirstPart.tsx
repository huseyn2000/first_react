import './FirstPart.scss';
import shapes from './assets/Shapes.svg';

export const FirstPart = () => {
    return (
        <div className="first_page1">
        <header>
          <div className="header">
            <img src="./first_pages_assets/Logo.svg" alt="finsweet" />

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
              <img src="./first_pages_assets/Icon.svg" alt="arrow" />
            </nav>
            <button className="burger-menu mobile-only">...</button>
          </div>
        </header>

        <div className="first_body">
          <div className="three_comp_div">
            <div className="square"></div>

            <h1>
              Transform Your Idea <br />
              Into Reality with Finsweet
            </h1>

            <p>
              The entire Finsweet team knows what's good with Webflow and <br />
              you can too with 1 week and a good attitude.
            </p>

            <button>
              <img
                id="shape"
                src={shapes}
                alt="shape"
              />

              <div>Request Quote</div>

              <div>
                <img src="./first_pages_assets/Icon.svg" alt="" />
              </div>

              <img id="shape2" src="./first_pages_assets/Shapes2.svg" alt="" />
            </button>
          </div>

          <div className="bottom_logo_foto">
            <img src="./first_pages_assets/Image.png" alt="" />
          </div>
        </div>

        <footer>
          <div>
            <p className="small">
              <small>Our Clients</small>
            </p>
            <p className="large">We've Worked with</p>
          </div>
          <img src="./first_pages_assets/firsy.svg" alt="" />
          <img src="./first_pages_assets/Logo (1).svg" alt="" />
          <img src="./first_pages_assets/Logo (2).svg" alt="" />
          <img src="./first_pages_assets/Logo (3).svg" alt="" />
          <img src="./first_pages_assets/last_logo.svg" alt="" />
        </footer>
      </div>
    );
};