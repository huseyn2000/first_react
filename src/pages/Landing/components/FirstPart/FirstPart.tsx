import "./FirstPart.scss";

import "./components/Button/Button";

import main_photo from "./assets/Image.png";
import foot1 from "./assets/firsy.svg";
import foot2 from "./assets/Logo (1).svg";
import foot3 from "./assets/Logo (2).svg";
import foot4 from "./assets/Logo (3).svg";
import foot5 from "./assets/last_logo.svg";
import { Button } from "./components/Button/Button";

export const FirstPart = () => {
  return (
    <div className="first_page1">
      <div className="first_body1">
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

          <Button div={"Request Quote"} />
        </div>

        <div className="bottom_logo_foto">
          <img id="shape" src={main_photo} alt="shape" />
        </div>
      </div>

      <footer>
        <div>
          <p className="small">
            <small>Our Clients</small>
          </p>
          <p className="large">We've Worked with</p>
        </div>
        <img src={foot1} alt="" />
        <img src={foot2} alt="" />
        <img src={foot3} alt="" />
        <img src={foot4} alt="" />
        <img src={foot5} alt="" />
      </footer>
    </div>
  );
};
