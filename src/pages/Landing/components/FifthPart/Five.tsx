import "./Five.scss";
import shapes from "./assets/Shapes.svg";
import one from "./assets/Icon Div (1).svg";
import two from "./assets/Icon Div (2).svg";
import three from "./assets/Icon Div (3).svg";
import four from "./assets/Icon Div (4).svg";
import five from "./assets/Icon Div (5).svg";
import six from "./assets/Icon Div.svg";
import { Box } from "./components/Box/Box";

export const Five = () => {
  return (
    <div className="fifth_page">
      <div className="content43">
        <div className="up_part">
          <div className="small_txt">Our Process</div>

          <h2>
            The process we are working <br />
            With Our client Worldwide
            <img id="logo_right" src={shapes} alt="" />
          </h2>

          <p>
            Through True Rich Attended does no end it his mother since real had
            half every <br />
            him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

        <div className="down_part">
          <div className="down">
            <Box imgsrc={one} h6={"Discover"} paragrapg={"01"} />
            <Box imgsrc={two} h6={"Designing"} paragrapg={"02"} />
            <Box imgsrc={three} h6={"Development"} paragrapg={"03"} />
          </div>

          <div className="down">
            <Box imgsrc={four} h6={"Testing"} paragrapg={"04"} />
            <Box imgsrc={five} h6={"Deployment"} paragrapg={"05"} />
            <Box imgsrc={six} h6={"Maintenance"} paragrapg={"06"} />
          </div>
        </div>
      </div>
    </div>
  );
};
