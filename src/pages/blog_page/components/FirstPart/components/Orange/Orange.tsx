import "./Orange.scss";

interface OrangeProps {
  imgsrc: string;
  h6: string;
}

export const Orange = (props: OrangeProps) => {
  return (
    <div className="contenty">
      <div className="h4_className">
        <h4>
          Great design expectations <br />
          prejudice in digital products <br />
          in Next Year
        </h4>
      </div>

      <div className="footer">
        <div className="row">
          <div>
            <img src={props.imgsrc} alt="" />
          </div>

          <div>
            <h6>{props.h6}</h6>
            <p>Jan 19, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};
