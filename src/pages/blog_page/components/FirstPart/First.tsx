import "./First.scss";
import { Orange } from "./components/Orange/Orange";
import arrow from "./assets/arrow.svg";
import img from "./assets/frst.png";
import img2 from "./assets/Image (1).png";
import img3 from "./assets/Image (3).png";
import big from "./assets/Image.png";

export const First = () => {
  const inputs = [
    {
      imgsrc: img,
      h6: "Andrew Jonson",
    },
    {
      imgsrc: img2,
      h6: "Mathew Jasele",
    },
    {
      imgsrc: big,
      h6: "Hussen Abakas",
    },
  ];

  return (
    <div className="first_bodyr">
      <div className="left">
        <div className="square"></div>

        <p>TREnding</p>

        <h2>
          Breaking the code How <br />
          did we build our Figma <br />
          plugin
        </h2>

        <div className="long">
          It is a long established fact that a reader will be distracted by the
          readable <br />
          content of a page when looking at its layout. The Maker is a
          decentralized. We <br />
          aim to attain the.
        </div>

        <div className="link_tag">
          <a href="#">
            Read More <img src={arrow} alt="" />
          </a>
        </div>

        <div className="row_one_photo">
          <img src={img2} alt="" />
          <p className="Andrew">Andrew Jonson</p>

          <div className="line"></div>

          <div className="posted">Posted on 27th January 2021</div>
        </div>

        <img src={img3} alt="" />
      </div>

      <div className="right">
        {inputs.map((input) => (
          <Orange
            key={`input-${input.h6}`}
            imgsrc={input.imgsrc}   
            h6={input.h6}
          />
        ))}
      </div>
    </div>
  );
};
