import "./Thr.scss";
import im1 from "../../../components/FirstPart/assets/Image (1).png";



interface ThrProps {
    imgsrc: string;
  }


export const Thr = (props: ThrProps) => {
    return (
        <div className="grid_item">
          <img src={props.imgsrc} alt="" />

          <div className="white_part">
            <h4>
              We aim to attain the <br />
              greatest satisfaction for our clients
            </h4>
            <p>
              It is a long established fact that a reader <br />
              will be distracted by the readable content <br />
              of a page.
            </p>

            <div className="foto_part">
              <div>
                <img src={im1} alt="" />
              </div>
              <div>
                <h6>Johnny Andro</h6>
                <p>Jan 19, 2021</p>
              </div>
            </div>
          </div>
        </div>
    );
  };
  