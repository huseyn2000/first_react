import plsium from "../../assets/footer_logo.svg";
import "./Comm.scss";
import circle1 from "../../assets/Circle.svg";
import circle2 from "../../assets/Circle (1).svg";
import circle3 from "../../assets/Circle (2).svg";
import quote from "../../assets/Quote.svg";

interface CommProps {
  imgsrc: string;
  h6: string;
  position: string;
  h4: string;
}

export const Comm = (props: CommProps) => {
  const { imgsrc, h6, position, h4 } = props;
  return (
    <div className="right">
      <div className="quote">
        <img src={quote} alt="" />
      </div>

      <div className="content">
        <div className="h4_className">
          <h4>{h4}</h4>
        </div>

        <div className="footer">
          <div className="row">
            <div>
              <img src={imgsrc} alt="" />
            </div>

            <div>
              <h6>{h6}</h6>
              <p>{position}</p>
            </div>
          </div>

          <div className="logoplusim">
            <img src={plsium} alt="" />
          </div>
        </div>
      </div>
      <div className="circle">
        <img src={circle1} alt="" />
        <img src={circle2} alt="" />
        <img src={circle3} alt="" />
      </div>
    </div>
  );
};
