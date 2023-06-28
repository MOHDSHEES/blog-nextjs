import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Link from "next/link";
// import { NavLink } from "react-router-dom";

const MNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div class="container-fluid p-0 mb-3">
        {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
        <Navbar
          expanded={expanded}
          // key={expand}
          expand="lg"
          bg="light"
          className="py-2 py-lg-0 px-lg-5"
        >
          <Container fluid>
            <Navbar.Brand className="navbar-brand d-block d-lg-none" href="#">
              {" "}
              <Link href="/">
                <h2 style={{ fontWeight: "600" }} class="m-0  text-uppercase">
                  <span class="text-primary">OFF</span>THE
                  <span class="text-primary">WEB</span>
                </h2>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : "expanded")}
              aria-controls={`offcanvasNavbar-expand-lg`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              onHide={() => setExpanded(false)}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  OFFTHEWEB
                </Offcanvas.Title>
                {/* <button
                    type="button"
                    class="btn-close text-reset new_close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button> */}
              </Offcanvas.Header>
              {/* <Navbar.Collapse id="navbarScroll"> */}
              <Offcanvas.Body className="align-items-center">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  // style={{ maxHeight: "100px" }}
                  // navbarScroll
                >
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    // as={NavLink}
                    className="nav-item "
                    to="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    // as={NavLink}
                    to="/categories"
                    className="nav-item "
                  >
                    Categories
                  </Nav.Link>
                  {/* <Nav.Link href="#" className="nav-item ">
                      Single Blog
                    </Nav.Link> */}
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    // as={NavLink}
                    to="/contact"
                    class="nav-item "
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    // as={NavLink}
                    to="/add"
                    class="nav-item "
                  >
                    Add Blog
                  </Nav.Link>
                  {/* {employeeData ? (
                    <Nav.Link
                      onClick={() => setExpanded(false)}
                      //   as={NavLink}
                      to={"/employee/" + employeeData.employeeId}
                      class="nav-item "
                    >
                      Dashboard
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      onClick={() => setExpanded(false)}
                      //   as={NavLink}
                      to="/employee/login"
                      class="nav-item "
                    >
                      Employee LogIn
                    </Nav.Link>
                  )} */}

                  <NavDropdown title="Policies" id="navbarScrollingDropdown">
                    <NavDropdown.Item
                      onClick={() => setExpanded(false)}
                      //   as={NavLink}
                      to="/privacy/policies"
                    >
                      Privacy Policies
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => setExpanded(false)}
                      //   as={NavLink}
                      to="/terms/condition"
                    >
                      Terms And Conditions
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => setExpanded(false)}
                      //   as={NavLink}
                      to="/advertise/policies"
                    >
                      Advertise
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* ))} */}
      </div>
    </div>
  );
};

export default MNavbar;
