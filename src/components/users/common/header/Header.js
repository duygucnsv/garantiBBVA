import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className={`sticky-top ${styles.main_navbar} `}>
      <Container >
        <Nav className={`mx-auto my-2 my-lg-0 ${styles.navLink}`}>
          <Nav.Link as={Link} to="/Mevduat">
            Mevduat
          </Nav.Link>
          <Nav.Link as={Link} to="/Yatırım">
            Yatırım
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Krediler
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Kartlar
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Dijital Bankacılık
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Sigorta ve Emeklilik
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Ödemeler ve Hizmetler
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Özel Bankacılık
          </Nav.Link>
        </Nav>

        {/* <UserMenu /> */}
      </Container>
    </Navbar>
  );
};

export default Header;
