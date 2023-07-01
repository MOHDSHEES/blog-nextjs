import React, { useContext, useEffect, useState } from "react";
// import Autocomplete from "../autocomplete/autocomplete";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import Autocomplete from "./autocomplete";
import useFetch from "../useFetch";
import { MyContext } from "../context";
import { useRouter } from "next/router";
import { message } from "antd";
import { closeMessage, openMessage } from "../functions/message";
// import { globalContext } from "../../context";

const NavBar = () => {
  const { titles, setTitles } = useContext(MyContext);

  const { data } = useFetch("titles", true);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  async function searchHandler(e, search) {
    e.preventDefault();
    openMessage(messageApi, "Searching...");
    // console.log(search);
    setDisabled(true);
    setExpanded(false);
    const { data } = await axios.post("/api/blog/title", {
      title: search,
    });
    setDisabled(false);
    // console.log(data);
    if (!data) {
      closeMessage(messageApi, "Blog Not Found", "error");
    } else {
      closeMessage(messageApi, "Blog Found", "success", 1);
      router.push("/blog/" + data._id + "/" + data.title.replace(/ /g, "-"));
    }
  }
  // const { titles: title, employeeData } = useContext(globalContext);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setTitles(data);
  }, [data]);

  return (
    <div>
      {contextHolder}
      <div class="container-fluid p-0  nav-a">
        {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
        <Navbar
          expanded={expanded}
          // key={expand}
          expand="lg"
          // bg="light"

          className="py-2 py-lg-0 px-lg-5"
        >
          <Container fluid>
            <Navbar.Brand
              as="span"
              className="navbar-brand d-block d-lg-none"
              href="#"
            >
              {" "}
              <Link href="/" shallow={true}>
                <h2 style={{ fontWeight: "600" }} class="m-0  text-uppercase">
                  <span style={{ color: "red" }}>OFF</span>
                  <span style={{ color: "black" }}>THE</span>
                  <span style={{ color: "red" }}>WEB</span>
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
                    as={Link}
                    shallow={true}
                    className="nav-item active"
                    href="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    as={Link}
                    shallow={true}
                    href="/contact"
                    className="nav-item"
                  >
                    Contact Us
                  </Nav.Link>

                  {/* <Nav.Link href="#" className="nav-item ">
                    Single Blog
                  </Nav.Link> */}
                  {/* <Nav.Link
                    onClick={() => setExpanded(false)}
                    as={Link}
                    href="/contact"
                    class="nav-item "
                  >
                    Contact
                  </Nav.Link> */}
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    target="_blank"
                    as={Link}
                    href="https://offtheweb.vercel.app/add"
                    className="nav-item"
                  >
                    Add Blog
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    as={Link}
                    href="https://offtheweb.vercel.app/employee/login"
                    target="_blank"
                    className="nav-item"
                  >
                    Employee
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setExpanded(false)}
                    as={Link}
                    shallow={true}
                    href="/career"
                    className="nav-item"
                  >
                    Careers
                  </Nav.Link>
                  {/* {employeeData ? (
                    <Nav.Link
                      onClick={() => setExpanded(false)}
                      // as={NavLink}
                      to={"/employee/" + employeeData.employeeId}
                      class="nav-item "
                    >
                      Dashboard
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      onClick={() => setExpanded(false)}
                      // as={NavLink}
                      to="/employee/login"
                      class="nav-item "
                    >
                      Employee LogIn
                    </Nav.Link>
                  )} */}

                  <NavDropdown title="Policies" id="navbarScrollingDropdown">
                    <NavDropdown.Item
                      onClick={() => setExpanded(false)}
                      as={Link}
                      shallow={true}
                      href="/policies/privacyPolicy"
                    >
                      Privacy Policies
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item onClick={() => setExpanded(false)}>
                      Testing
                    </NavDropdown.Item> */}
                    <NavDropdown.Item
                      onClick={() => setExpanded(false)}
                      as={Link}
                      shallow={true}
                      href="/policies/termsCondition"
                    >
                      Terms And Conditions
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => setExpanded(false)}
                      as={Link}
                      shallow={true}
                      href="/policies/advertise"
                    >
                      Advertise
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex"> */}
                <Autocomplete
                  disable={disabled}
                  searchHandler={searchHandler}
                  suggestions={titles}
                />
                {/* <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button> */}
                {/* </Form> */}
                {/* </Navbar.Collapse> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* ))} */}
      </div>
    </div>
  );
};

export default NavBar;
