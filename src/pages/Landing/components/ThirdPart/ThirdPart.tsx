import "./ThirdPart.scss";

import frs from "./assets/Group 1749.svg";
import second from "./assets/Group 1755.svg";
import third from "./assets/Group 1855.svg";
import color from "./assets/Group 1748.svg";
import { WhiteBox } from "./components/WhiteBox/WhiteBox";

export const ThirdPart = () => {
  return (
    <div className="third_page">
      <div className="content5">
        <div className="left">
          <div className="expertise">Our expertise</div>

          <h2>
            We want to get local identification in every <br />
            corner of the world in this <br />
            era of global citizenship
          </h2>

          <p>
            Through True Rich Attended does no end it his mother since real had
            half <br />
            every him case in packages enquire we up ecstatic unsatiable saw his
            giving <br />
            Remain expense you position concluded.
          </p>
        </div>

        <div className="right">
          <div className="blue"></div>

          <WhiteBox
            imgsrc={frs}
            h6="On Time Delivery"
            paragraph="Through True Rich Attended does 
            no end it  his mother 
            since real had half every him."
            colorimg={color}
          />
          <WhiteBox
            imgsrc={second}
            h6="Best Quality"
            paragraph="Through True Rich Attended does 
            no end it his mother 
            since real had half every him."
            colorimg={color}
          />
          <WhiteBox
            imgsrc={third}
            h6="Support Assist"
            paragraph="Through True Rich Attended does 
          no end it his mother 
          since real had half every him."
            colorimg={color}
            hasDecoration={true}
          />
        </div>
      </div>
    </div>
  );
};
