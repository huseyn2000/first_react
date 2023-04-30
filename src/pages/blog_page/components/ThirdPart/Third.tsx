import "./Third.scss";
import { Thr } from "./Thr/Thr";
import im1 from "./assests/Image (2).png";
import im2 from "./assests/Image (3).png";
import im3 from "./assests/Image (4).png";
import im4 from "./assests/Image (5).png";
import im5 from "./assests/Image (6).png";
import im6 from "./assests/Image (7).png";

export const Third = () => {
  return (
    <div className="third_body1">
      <h2>All posts</h2>

      <div className="grid-container">
        <Thr imgsrc={im1} />
        <Thr imgsrc={im2} />
        <Thr imgsrc={im3} />
        <Thr imgsrc={im4} />
        <Thr imgsrc={im5} />
        <Thr imgsrc={im6} />
      </div>
    </div>
  );
};
