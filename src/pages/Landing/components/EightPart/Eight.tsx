import "./Eight.scss";

import leftcorner from "./assests/left_corner.svg";
import side_corner from "./assests/siede_clmn.svg";
import corner from "./assests/corner.svg";
import last_icon from "./assests/last_icon.svg";
import arrow from "./assests/footer_arrow.svg";
import logo1 from "./assests/Logo (1).svg";
import fb from "./assests/Facebook/Negative.svg";
import insta from "./assests/Instagram/Negative.svg";
import tweet from "./assests/Twitter/Negative.svg";
import link from "./assests/LinkedIn/Negative.svg";

export const Eight = () => {
  return (
    <div className="eighth_page">
      <div className="container">
        <div className="blue_box">
          <img className="logo_corner" src={leftcorner} alt="" />

          <div className="content">
            <div className="texts">
              <div className="smallone">NEWSLETTER</div>
              <div className="bigone">
                Subscribe our News Letter <br />
                to get Latest Updates.
              </div>
            </div>
            <div className="input">
              <form>
                <input
                  type="text"
                  name="search"
                  placeholder="Paresh@Pixeto.com"
                />
              </form>
            </div>
          </div>
        </div>

        <img src={side_corner} alt="" />
      </div>

      <div className="contain2">
        <div>
          <img src={corner} alt="" />
        </div>
        <div className="total">
          <div className="lft">
            <div className="first">
              Let's make <br />
              something special
            </div>

            <div className="scnd">Let's talk! 🤙</div>
            <div className="thrd">020 7993 2905</div>
            <div className="four">hi@finsweet.com</div>
            <div className="fift">
              <div>
                DLF Cybercity, Bhubaneswar, <br />
                India, &52050
              </div>
            </div>
          </div>

          <div className="rght">
            <div className="col1">
              <a href="">Home</a>
              <a href="">Service</a>
              <a href="">Company</a>
              <a href="">Career</a>
              <a href="">News</a>
            </div>

            <div className="col2">
              <a className="head_link" href="#">
                Service
              </a>

              <a href="">Technical support</a>
              <a href="">Testing</a>
              <a href="">Development</a>
              <a href="">AWS/Azure </a>
              <a href="">Consulting</a>
              <a href="">Information Technology</a>
            </div>

            <div className="col3">
              <a className="head_link" href="#">
                Resources
              </a>

              <a href="">About Us</a>
              <a href="">Testimonial</a>
              <a href="">Privacy Police</a>
              <a href="">Terms of Use</a>
              <a href="">Blog</a>

              <div className="contact">
                <a href="#">
                  <img src={last_icon} alt="" /> Contact Us
                  <img src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="content">
          <div className="header">
            <img src={logo1} alt="finsweet" />

            <p>©2021 Finsweet</p>
          </div>

          <nav>
            <p>
              <a href="#" className="className_header">
                <img src={fb} alt="" />
              </a>
            </p>
            <p>
              <a href="#" className="className_header">
                <img src={tweet} alt="" />
              </a>
            </p>

            <p>
              <a href="#" className="className_header">
                <img src={insta} alt="" />
              </a>
            </p>
            <p>
              <a href="#" className="className_header">
                <img src={link} alt="" />
              </a>
            </p>
          </nav>
        </div>
      </footer>
    </div>
  );
};
