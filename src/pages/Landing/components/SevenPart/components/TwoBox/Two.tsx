import "./Two.scss";
import arrow from "../../../FourPart/assets/arrow.svg";

interface TwoProps {
  imgsrc: string;
  div: string;
}

export const Two = (props: TwoProps) => {
  return (
    <div className="left">
      <img src={props.imgsrc} alt="" />

      <div className="firsts_box">
        <div className="padding">
          <div className="small_p">Jan 19, 2021</div>
          <h4 className="h4_className">{props.div}</h4>
          <div className="link_tag">
            <a href="#">
              Read More <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
