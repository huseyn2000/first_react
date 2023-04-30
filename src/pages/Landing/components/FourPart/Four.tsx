import { Button } from "../FirstPart/components/Button/Button";
import "./Four.scss";
import { ThreeBox } from "./components/ThreeBox/ThreeBox";
import frs from "./assets/Icon Div (1).svg";
import sec from "./assets/Icon Div (2).svg";
import three from "./assets/Icon Div.svg";

export const Four = () => {
  return (
    <div className="fourth_page">
      <div className="content21">
        <div className="up_part">
          <div className="small_txt">Our Services</div>

          <h2>
            We build software solutions <br />
            that solve client's business <br />
            challenges
          </h2>

          <Button div={"Start a Project"} />
        </div>

        <div className="down_part">
          <div className="container">
            <ThreeBox imgsrc={frs} h6="Technical support" />
            <ThreeBox imgsrc={sec} h6="Testing Management" />
            <ThreeBox imgsrc={three} h6="Development" />
          </div>
        </div>
      </div>
    </div>
  );
};
