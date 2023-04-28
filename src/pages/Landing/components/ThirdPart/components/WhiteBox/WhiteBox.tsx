import "./WhiteBox.scss";

interface WhiteBoxProps {
  imgsrc: string;
  h6: string;
  paragraph: string;
  colorimg: string;
  hasDecoration?: boolean;
}

export const WhiteBox = (props: WhiteBoxProps) => {
  const { imgsrc, h6, paragraph,colorimg, hasDecoration } = props;
  return (
    <div className="thrd_box">
      <div>
        <img src={imgsrc} alt="" />
      </div>

      <div className="text1">
        <h6>{h6}</h6>
        <p>{paragraph} </p>
        {
          hasDecoration && <img src={colorimg} alt="" />
        }
      </div>
    </div>
  );
};
