import "./Six.scss";

import img1 from "./assets/Image 1.png";
import img from "./assets/Image.png";
import img2 from "./assets/Image 2.png";
import img3 from "./assets/Image 3.png";
import { Comm } from "./components/Commen/Comm";

export const Six = () => {
  return (
    <div className="sixth_page">
      <div className="contents">
        <div className="left">
          <div className="blue"></div>

          <h2>
            Our customers love <br />
            what we do
          </h2>

          <p>Transform your idea into reality with finsweet</p>

          <p className="snd_p">
            It is a long established fact that a reader will be distracted by
            <br />
            the readable content of a page when looking at its layout.
          </p>

          <div className="photo_cont">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>

          <p className="last_p">30+ Customer Reviews</p>
        </div>

        <Comm
          imgsrc={img}
          h6={"Johnny Andro"}
          position={"Director, Company"}
          h4={
            "Finsweet has been a wonderful partner to work with. I have been a customer now for the past fewmonths now and I have had nothing but positive experiences!"
          }
        />
      </div>
    </div>
  );
};
