import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";
import useFetch from "../useFetch";
import Autocomplete from "./autocomplete";
import { message } from "antd";
import { closeMessage, openMessage } from "../functions/message";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Navbar = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { titles, setTitles } = useContext(MyContext);
  const { data } = useFetch("titles", true);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  // console.log(data);
  useEffect(() => {
    setTitles(data);
  }, [data]);

  async function searchHandler(e, search) {
    e.preventDefault();
    // openMessage(messageApi, "Searching...");
    // console.log(search);
    setDisabled(true);
    const { data } = await axios.post("/api/blog/title", {
      title: search,
    });
    setDisabled(false);
    // console.log(data);
    if (!data) {
      closeMessage(messageApi, "Blog Not Found", "error");
    } else {
      router.push(
        "/blog/" +
          data.title.replace(/ /g, "-").replace(/\?/g, "") +
          "/" +
          data._id
      );
    }
    // closeMessage(messageApi);
    // console.log(data);
    // openMessage(messageApi, "Searching...");
    // closeMessage(messageApi, "Blog found", "success");
    // const blog = data[0];
  }

  return (
    <>
      {contextHolder}
      <div className="container nav-bar-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="navbar-logo-mobile">
            <Link href="/" shallow={true}>
              <h2
                class="text-uppercase "
                style={{ color: "black", fontWeight: 700, marginBottom: 0 }}
              >
                <span style={{ color: "red" }}>OFF</span>THE
                <span style={{ color: "red" }}>WEB</span>
              </h2>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* <div className="container-fluid navbar-container"> */}
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="/"
                  shallow={true}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Add Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Employee Login
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Policies
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Privacy policies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Terms And Conditions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Advertise
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar-container">
              <Autocomplete
                disable={disabled}
                searchHandler={searchHandler}
                suggestions={titles}
              />
            </div>
            {/* <form>
            <div class="input-group ">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary search-btn"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </form> */}
            {/* </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
