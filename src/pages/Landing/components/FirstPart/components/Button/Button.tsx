import "./Button.scss";
import shapes from "../../assets/Shapes.svg";
import arrow from "../../assets/Icon.svg";

interface ButtonProps {
  div: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button>
      <img id="shape" src={shapes} alt="shape" />

      <div>{props.div}</div>

      <div>
        <img src={arrow} alt="arrow" />
      </div>
    </button>
  );
};
