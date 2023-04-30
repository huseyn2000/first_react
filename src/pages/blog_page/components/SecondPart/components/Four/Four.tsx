import "./Four.scss";
import img from "../../../FirstPart/assets/Image (1).png";


interface FourProps {
    imgsrc: string;
  }

export const Four = (props: FourProps) => {
  return (
    <div className="left1">
      <img src={props.imgsrc} alt="" />

      <div className="firsts_box">
        <div className="padding">
          <div className="h4_className">
            Today’s best design trends for digital products
          </div>
          <div className="link_tag">
            <div>
              <img src={img} alt="" />
            </div>

            <div>
              <h6>Andrew Jonson</h6>
              <p>Jan 19, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
