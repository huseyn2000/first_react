import "./SignUp.scss";
import photo from "../assets/Image (2).png";
import logo from  "../assets/Logo.svg";
import fb from  "../assets/fb.svg";
import google from  "../assets/google.svg";
import apple from  "../assets/apple.svg";
import icon from  "../assets/icon.svg";

export const SignUp = () => {
  return (
    <>
        <div className="sgn">
          <img src={logo} alt="" />
        </div>

      <div className="content7">
        <div className="texts">
          <h3>Create an account</h3>

          <p>
            Already have an account? <a href="#"> Log in</a>
          </p>
        </div>

        <div className="body">
          <div className="first3">
            <div className="both">
              <div className="name">What should we call you?</div>

              <div className="input">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Enter your profile name"
                  />
                </form>
              </div>
            </div>

            <div className="both">
              <div className="name">What’s your email?</div>

              <div className="input">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Enter your email address"
                  />
                </form>
              </div>
            </div>

            <div className="both">
              <div className="name">
                Create a password
                <div>
                  <img src={icon} alt="" /> Hide
                </div>
              </div>

              <div className="input">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Enter your password"
                  />
                </form>
              </div>
              <div className="below">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </div>
            </div>
          </div>

          <div className="total2">
            <div className="txt">
              By creating an account, you agree to the
              <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a> .
            </div>

            <div className="buuton">
                <div>Create an account</div>
            </div>
          </div>

          <div className="footer">
            <div className="text">OR Continue with</div>

            <div className="btts">
              <button>
                <img src={fb} alt="" />
                Facebook
              </button>
              <button>
              <img src={google} alt="" />
                Google
              </button>
              <button>
              <img src={apple} alt="" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
