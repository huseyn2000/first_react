import "./Sec.scss";
import { Four } from "./components/Four/Four";
import four1 from "./assets/four_1.png";
import four2 from "./assets/four_2.png";
import four3 from "./assets/four_3.png";
import four4 from "./assets/four_3.png";

export const Sec = () => {
  return (
    <div className="sec_body">
      <div className="content">
        <h2>Read Recent Post</h2>

        <div className="total">
          <div className="lasts">
            <Four imgsrc={four1} />
            <Four imgsrc={four2} />
            <Four imgsrc={four3} />
            <Four imgsrc={four4} />
          </div>
        </div>
      </div>
    </div>
  );
};
