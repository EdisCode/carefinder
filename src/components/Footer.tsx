import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import "../styles/components.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
  return (
    <footer className="footer">
      <Container className="footerContainer">
        <Col className="col">
          <FontAwesomeIcon className="logo" icon={faHospital} />
          <div className="logoText">CareFinder</div>

          <p className="footer_text">
            Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
          </p>
        </Col>
        <Row className="row">
          <Col className="rowcol">
            <div className="footer_quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col className="rowcol">
            <div className="footer_quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/home">Home</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/findHospital">Find Hospital</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Log In</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/signup">Sign Up</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col className="rowcol">
            <div className="footer_quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-2-line"></i>
                  </span>
                  <p>Oniru, Lagos, Nigeria</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+234 419 419 4194</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>cema4.ee@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Col className="col">
          <p className="footer__copyright">
            © {yearTxt} Service - Developed by
            <a href="https://github.com/EdisCode"> Edikan Ekanem</a>
          </p>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
