import "./Button.scss";
import shapes from "../../assets/Shapes.svg";
import arrow from "../../assets/Icon.svg";

export const Button = () => {
  return (
    <header>
      <button>
        <img id="shape" src={shapes} alt="shape" />

        <div>Request Quote</div>

        <div>
          <img src={arrow} alt="arrow" />
        </div>
      </button>
    </header>
  );
};
