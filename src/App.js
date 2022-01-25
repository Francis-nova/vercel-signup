import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";
import { Row, Col, Button } from "reactstrap";
import vercelLogo from "./images/svgexport-1.svg"; // vercel logo...

// icons
import { AiFillGithub } from "react-icons/ai";
import { SiGitlab, SiBitbucket } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

// import components
import InfoList from "./components/InfoList";

// info list
const list = [
  {
    caption: "Instant edge deploys",
    subtitle:
      "Push to git and your website is live. Zero configuration required.",
  },
  {
    caption: "Collaborate with previews",
    subtitle:
      "Every pull request gets its own preview URL. Share them to gather feedback or run tests.",
  },
  {
    caption: "Turn static to dynamic",
    subtitle:
      "Generate blazing fast pages and augment them with rich JavaScript that brings your apps alive.",
  },
  {
    caption: "Ship directly to the edge",
    subtitle: "Always fast. Always online. Always a hit.",
  },
];

const App = () => {
  return (
    <div className="App">
      <Row className="">
        <Col className="section bg-lighter-dark" xsHidden>
          <Row className="container">
            {/* vercel image */}
            <img src={vercelLogo} className="logo" alt="Vecel" />

            {/* list text component */}
            <div className="infoList">
              <InfoList list={list} />
            </div>

            {/* text */}
            <Row>
              <Col>
                <small className="thirdText">
                  Proudly Serving Amazing Companies
                </small>
              </Col>
            </Row>

            {/* image list */}
            <Row style={{ marginTop: 30 }}>
              <Col>
                <div className="imageList">
                  <img
                    src={require("./images/logos/HashiCorpLogo.svg").default}
                    className="img-responsive"
                    alt="Hashi Corp"
                  />
                  <img
                    src={require("./images/logos/McDonalds-logo.svg").default}
                    className="img-responsive"
                    alt="McDonalds Corp"
                  />
                  <img
                    src={require("./images/logos/facebook-logo.svg").default}
                    className="img-responsive"
                    style={{ maxWidth: "150px" }}
                    alt="facebook"
                  />
                  <img
                    src={
                      require("./images/logos/washington-post-logo.svg").default
                    }
                    className="img-responsive"
                    style={{ maxWidth: "200px" }}
                    alt="washington post"
                  />
                </div>
                <div className="imageList">
                  <img
                    src={require("./images/logos/auth0-logo.svg").default}
                    className="img-responsive"
                    alt="auth0-logo"
                  />
                  <img
                    src={require("./images/logos/uber-logo.svg").default}
                    className="img-responsive"
                    alt="Hashi Corp"
                  />
                  <img
                    src={require("./images/logos/tripadvisor-logo.svg").default}
                    className="img-responsive"
                    alt="Hashi Corp"
                  />
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col className="section bg-darker">
          <Row className="container" style={{ padding: "0px 40px" }}>
            <Row className="signup-page">
              <Col xs={12}>
                <h1 className="geist-text geist-text-no-margin h1 w-600">
                  Join the best <br /> frontend teams
                </h1>
              </Col>
              {/* buttons */}
              <Col xs={12} style={{ margin: "25px 0px" }}>
                <Button className="btn btn-github btn-block">
                  <AiFillGithub
                    style={{ fontSize: "22px", margin: "0px 10px" }}
                  />
                  Continue with GitHub
                </Button>
                <Button className="btn btn-gitlab btn-block">
                  <SiGitlab style={{ fontSize: "22px", margin: "0px 10px" }} />
                  Continue with GitLab
                </Button>
                <Button className="btn btn-bitbucket btn-block">
                  <SiBitbucket
                    style={{ fontSize: "22px", margin: "0px 10px" }}
                  />
                  Continue with Bitbucket
                </Button>

                <div className="btn-email text-center">
                  <a href="#foo">Continue with Email →</a>
                </div>
              </Col>

              {/* terms and condition */}
              <Col xs={12} style={{ margin: "25px 0px" }}>
                <p className="geist-text geist-text-no-margin p">
                  By clicking continue, you agree to our <br />
                  <a href="#foo">
                    Terms of Service <BiLinkExternal />
                  </a>
                  and
                  <a href="#foo">
                    Privacy Policy <BiLinkExternal />
                  </a>
                </p>
              </Col>

              <Col xs={12} style={{ margin: "20px 0px" }}>
                <div>
                  <p
                    className="geist-text geist-text-no-margin p"
                    style={{ color: "white" }}
                  >
                    Have a complex company use case?
                  </p>
                  <a href="#foo" className="secondText">
                    Get enterprise-grade assistance
                  </a>
                </div>

                <div className="divider"></div>

                <p className="sign-section geist-text p">
                  Already have an account? <a href="#foo">Log in</a>
                </p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default App;
