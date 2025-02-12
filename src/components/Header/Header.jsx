import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import HeaderLogo from "../../assets/logo/netflix-4.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <Navbar
      variant=""
      expand="lg"
      className="bg-transparent text-white sticky-top"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={HeaderLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white fs-5">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white fs-5">
              TVShow
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white fs-5">
              Movies
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white fs-5 ">
              Latest
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white fs-5 ">
              MyList
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white fs-5 ">
              Browse by Languages
            </Nav.Link>

            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Form className="d-flex gap-3 text-white">
            <Nav.Link href="#" disabled>
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#" disabled></Nav.Link>
            <Nav.Link href="#action2">
              <NotificationsNoneIcon />
            </Nav.Link>
            <Nav.Link href="#" disabled></Nav.Link>
            <Nav.Link href="#" disabled>
              <AccountBoxIcon />
            </Nav.Link>

            <ArrowDropDownIcon />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
