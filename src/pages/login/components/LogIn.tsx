import "./LogIn.scss";
import logo from "../../signup/assets/Logo.svg";

export const LogIn = () => {
  return (
    <>
      <div className="first_page">
        <img src={logo} alt="" />

        <div className="content">
          <div className="signin">Sign in</div>

          <div className="both">
            <div className="name">Email or mobile phone number</div>

            <div className="input">
              <form>
                <input type="text" name="search" />
              </form>
            </div>
          </div>

          <div className="both">
            <div className="name">
              Your password
              <div>
                <img src="../signup/icon.svg" alt="" /> Hide
              </div>
            </div>

            <div className="input">
              <form>
                <input type="text" name="search" />
              </form>
            </div>
          </div>
          <div className="total">
            <div className="buuton">
              <div>Login in</div>
            </div>

            <div className="txt">
              By continuing, you agree to the
              <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a> .
            </div>
          </div>

          <div className="two">
            <div className="l">
              <a href="#">Other issue with sign in</a>
            </div>

            <div className="l">
              <a href="#">Forget your password</a>
            </div>
          </div>
        </div>

        <div className="content2">
          <div className="community">New to our community</div>

          <div className="buuton">
            <div>Create an account</div>
          </div>
        </div>

        <footer>
          <nav>
            <a href="#" className="className_header">
              Help Center
            </a>
            <a href="#" className="className_header">
              Terms of Service
            </a>
            <a href="#" className="className_header">
              Privacy Policy
            </a>
            <a href="#" className="className_header">
              @2022yanliudesign
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
};
