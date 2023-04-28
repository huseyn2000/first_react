import "./ThreeBox.scss";
import arrow from "../../assets/arrow.svg";


interface ThreeBoxProps {
  imgsrc: string;
  h6: string;
}

export const ThreeBox = (props: ThreeBoxProps) => {
  return (
    <div className="second">
      <img src={props.imgsrc} alt="" />

      <h6>{props.h6}</h6>

      <p>
        We aim to attain the greatest satisfaction for our clients and be one of
        the prominent names when it comes to world-className service
      </p>

      <a href="#">
        Read more <img src={arrow} alt="" />
      </a>
    </div>
  );
};
