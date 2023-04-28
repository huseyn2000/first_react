import "./Seven.scss";
import left from "./assets/Image (2).png";
import right from "./assets/Image (3).png";
import { Two } from "./components/TwoBox/Two";

export const Seven = () => {
  return (
    <div className="seventh_page">
      <div className="content">
        <div className="blue"></div>

        <h2>Read our latest blogs & news</h2>

        <div className="lasts">
          <Two imgsrc={left} div={"Today’s best design trends for digital products"} />
          <Two imgsrc={right} div={"A practical guide to building a brand strategy"} />

        </div>
      </div>
    </div>
  );
};
