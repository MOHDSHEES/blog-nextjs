import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../components/context";
import Card2 from "../../components/homepage/card2";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBriefcase,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import JobDescription from "../../components/modal/jobDescription";
import axios from "axios";

const Jobs = () => {
  const [show, setShow] = useState(false);
  const { trending } = useContext(MyContext);

  const [jobs, setJobs] = useState(null);
  async function getJobs() {
    const { data } = await axios.post("api/getJobs");
    setJobs(data);
  }
  console.log(jobs);
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <div>
      <section className=" single-post-area section-padding gray-bg">
        <Head>
          <title>
            {/* {categories && categories.length
              ? categories[0].category
              : "Category"} */}
          </title>
          <meta
            property="og:image"
            content="https://res.cloudinary.com/domyp6djh/image/upload/v1688851669/common/ezgif.com-gif-maker_xrbea2.webp"
          />
          <meta
            name="description"
            content="Explore the captivating world of OffTheWeb.in - a captivating blog website that delves into a myriad of topics, from technology to business, sports to cyber security. Immerse yourself in our thought-provoking articles, engage in enlightening discussions, and stay informed with our expertly curated content. Join us on OffTheWeb.in and embark on a journey of discovery, inspiration, and endless possibilities."
            data-rh="true"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Explore the captivating world of OffTheWeb.in - a captivating blog website that delves into a myriad of topics, from technology to business, sports to cyber security. Immerse yourself in our thought-provoking articles, engage in enlightening discussions, and stay informed with our expertly curated content. Join us on OffTheWeb.in and embark on a journey of discovery, inspiration, and endless possibilities."
          />
          <meta property="og:title" content="OFFTHEWEB" />
          <meta
            name="keywords"
            content="OFFTHEWEB,OFF THE WEB, THE WEB, OFF WEB, technology trends,trending,categories,category,technology,sports,cybersecurity,business"
          />
        </Head>
        <div className="container category-container">
          <div className="row">
            <div
              // onScroll={(e) => handleScroll(e)}
              className="col-lg-8 posts-list"
              style={{ marginBottom: "20px" }}
            >
              <div>
                <div
                  style={{ background: "white" }}
                  class="d-flex align-items-center justify-content-center  py-2 px-4 mb-3"
                >
                  <h2 className="">Jobs</h2>
                </div>
              </div>
              <div className="categories-container row">
                {jobs &&
                  jobs.map((data, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => setShow(true)}
                        class="card categories-card  job-cards"
                        style={{ padding: 0, margin: "10px" }}
                      >
                        {/* <Link
                        href={
                          "/blogs/" +
                          data.title
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/\?/g, "") +
                          "-" +
                          data.id
                        }
                      > */}

                        <div class="card-body">
                          <div className="job-title">
                            <img
                              class="card-img-top"
                              loading="lazy"
                              src={data.logo}
                              //   alt={data.category}
                            />
                            <h5 class="card-title">{data.jobTitle}</h5>
                          </div>
                          <div className="job-meta ">
                            <small>
                              <b>
                                <FontAwesomeIcon icon={faLocationDot} />
                              </b>
                              {data.location}
                            </small>

                            <small>
                              <b>
                                <FontAwesomeIcon icon={faBriefcase} />
                              </b>{" "}
                              {data.experience}
                            </small>
                            <small>
                              <b>
                                <FontAwesomeIcon icon={faClock} />
                              </b>{" "}
                              {data.lastDate === "" ? "ASAP" : data.lastDate}
                            </small>
                          </div>

                          <p
                            class="card-text break-line-3 mt-2"
                            style={{ lineHeight: "25px" }}
                          >
                            {data.jobSummary}
                            {/* {data.description} */}
                          </p>
                        </div>
                        {/* </Link> */}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                {/* <TagClouds keywords={data && data.keywords} /> */}

                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  <div className="trending-sidebar scrollbar-over">
                    {trending &&
                      trending.length !== 0 &&
                      trending.map((blog, idx) => {
                        return <Card2 data={blog} key={idx} />;
                      })}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JobDescription show={show} setShow={setShow} />
    </div>
  );
};

export default Jobs;
