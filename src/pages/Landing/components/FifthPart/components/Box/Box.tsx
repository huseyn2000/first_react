import "./Box.scss";

interface BoxProps {
  imgsrc: string;
  h6: string;
  paragrapg: string;
}

export const Box = (props: BoxProps) => {
  return (
    <div className="f_f">
      <div>
        <img src={props.imgsrc} alt="" />
      </div>

      <div className="text1">
        <h6>{props.h6}</h6>
        <p>
          We aim to attain the greatest 
          satisfaction for our clients and be 
          one of the prominent.
        </p>
      </div>
      <p className="numb">{props.paragrapg}</p>
    </div>
  );
};
