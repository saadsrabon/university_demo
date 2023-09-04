import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            {/* <Col sm={12} md={6} lg={2}>
              <div>
                <ul className="social-icons">
                  <li>
                    <a href="/d">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/d">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/d">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/d">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col> */}
            <Col sm={12} md={6} lg={4}>
              <h4 className="col-title">INFORMATION</h4>
              <ul className="information">
                <li>
                  <a href="/home">Online Payments</a>
                </li>
                <li>
                  <a href="/home">TERMS & CONDITIONS</a>
                </li>
                <li>
                  <a href="/home">Career</a>
                </li>
                <li>
                  <a href="/home">Privacy Policy</a>
                </li>
                <li>
                  <a href="/home">Refund Policy</a>
                </li>
              </ul>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <h4 className="col-title">CUSTOMER SERVICE</h4>
              <ul className="information">
                <li>
                  <a href="/home">FAQs</a>
                </li>
                <li>
                  <a href="/home">Store Locator</a>
                </li>
                <li>
                  <a href="/home">All About DERHADDI</a>
                </li>
                <li>
                  <a href="/home">Contact Info</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <h4 className="col-title">REACH US</h4>
              <ul className="information contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  Uttara, Dhaka, Bangladesh
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  Email: info@derhaddi.com
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  Helpline: +8801728947027
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">
          {" "}
          <span className="text-warning fw-bold">
            Copyright &copy; DERHADDI
          </span>
        </p>
      </div>
    </>

   
  );
};

export default Footer;
