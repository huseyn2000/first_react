import "./Six.scss";

export const Six = () => {
  return (
    <div className="sixth_page">
      <div className="content">
        <div className="left">
          <div className="blue"></div>

          <h2>
            Our customers love <br />
            what we do
          </h2>

          <p>Transform your idea into reality with finsweet</p>

          <p className="snd_p">
            It is a long established fact that a reader will be distracted by
            <br />
            the readable content of a page when looking at its layout.
          </p>

          <div className="photo_cont">
            <img src="./sixth_page/Image 3.png" alt="" />
            <img src="./sixth_page/Image 2.png" alt="" />
            <img src="./sixth_page/Image 1.png" alt="" />
          </div>

          <p className="last_p">30+ Customer Reviews</p>
        </div>

        <div className="right">
          <div className="quote">
            <img src="./sixth_page/Quote.svg" alt="" />
          </div>
          <div className="content">
            <div className="h4_className">
              <h4>
                Finsweet has been a wonderful partner <br />
                to work with. I have been a customer <br />
                now for the past few months now and I <br />
                have had nothing but positive experiences!
              </h4>
            </div>

            <div className="footer">
              <div className="row">
                <div>
                  <img src="./sixth_page/Image.png" alt="" />
                </div>

                <div>
                  <h6>Johnny Andro</h6>
                  <p>Director, Company</p>
                </div>
              </div>

              <div className="logoplusim">
                <img src="./sixth_page/footer_logo.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="circle">
            <img src="./sixth_page/Circle.svg" alt="" />
            <img src="./sixth_page/Circle (1).svg" alt="" />
            <img src="./sixth_page/Circle (2).svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
