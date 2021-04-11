import './CustomNavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HomeRounded } from '@material-ui/icons';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

 const CustomNavbar = (props) => {
  const pathName = props?.location?.pathname;
  console.log(pathName);
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="headicon">
        <Navbar.Brand className="header_home">
          <HomeRounded></HomeRounded>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="nav_link_text">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Education
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/software"
            className={pathName === "/software" ? "header_link_active" : "header_link"}
          >
            Software
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={pathName === "/contact" ? "header_link_active" : "header_link"}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(CustomNavbar)