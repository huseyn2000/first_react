import "./SecondPart.scss";
import frs from "./second_page_assets/Image 1.png";
import second from "./second_page_assets/Image 2.png";
import third from "./second_page_assets/Image 3.png";
import link_arrow from "./second_page_assets/footer_arrow.svg";
import three_color from "./second_page_assets/Group 1710.svg";

export const SecondPart = () => {
  return (
    <div className="second_page">
      <div className="texts">
        <div className="text_part1">
          <div className="about">ABOUT US</div>

          <h2>
            The company leads entire <br />
            webdesign process from <br />
            concept to delivery.
          </h2>
        </div>

        <div className="text_part2">
          <h3>The Era Of Technology.</h3>

          <p>
            Through True Rich Attended does no end it his mother since real had
            <br />
            half every him case in packages enquire we up ecstatic unsatiable
            <br />
            saw his giving Remain expense you position concluded.
          </p>
        </div>
      </div>

      <div className="container">
        <img src={frs} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
      </div>

      <div className="second_page_footer">
        <div className="first_part">
          <div>
            <h3>1560+</h3>
            <img src={three_color} alt="" />

            <p>Project Delivered</p>
          </div>

          <div>
            <h3>100+</h3>
            <img src={three_color} alt="" />

            <p>Professional</p>
          </div>

          <div>
            <h3>950+</h3>
            <img src={three_color} alt="" />
            <p>Happy Client</p>
          </div>

          <div>
            <h3>10 yrs</h3>
            <img src={three_color} alt="" />
            <p>Experience</p>
          </div>
        </div>

        <div className="sec_part">
          <a href="#">Read about us</a>
          <img src={link_arrow} alt="" />
        </div>
      </div>
    </div>
  );
};
