import React, { useState } from "react";

const CareerComponent = () => {
  const [active, setActive] = useState({
    state1: false,
    state2: false,
    state3: false,
  });
  function toggle(name) {
    if (active[name]) {
      document.getElementById(name).scrollIntoView({ behavior: "smooth" });
    }
    setActive({
      ...active,
      [name]: !active[name],
    });
  }
  return (
    <div class="accordion a-red" id="accordionPanelsStayOpenExample">
      <div style={{ textAlign: "center" }}>
        <h2 className=" mt-4">Career Opportunities </h2>
        <h3 className="mb-5"> Current Openings</h3>
      </div>
      <div class="accordion-item" style={{ position: "relative" }}>
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed "
            type="button"
            id="state1"
            onClick={(e) => toggle("state1")}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseOne"
          >
            1) Social Media Management Intern
          </button>
        </h2>
        <div class="accordion-body">
          <strong>Department:</strong> Marketing
          <br />
          <br />
          <strong>Reports to:</strong> Social Media Manager
          <br />
          <br />
          <strong>Summary</strong>
          <br />
          The Social Media Management Intern is responsible for supporting the
          social media team in the development and execution of social media
          marketing campaigns. The intern will be responsible for creating and
          scheduling social media posts, engaging with followers, and tracking
          analytics.
          <p
            data-bs-toggle="collapse"
            onClick={(e) => toggle("state1")}
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
            className="read-more cursor-pointer"
          >
            {active.state1 ? "read less..." : "read more..."}
          </p>
        </div>

        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse"
          style={{ marginTop: "-30px" }}
        >
          <div class="accordion-body">
            <strong>Responsibilities:</strong>
            <br /> * Create and schedule social media posts that are aligned
            with the company's brand and marketing goals
            <br /> * Engage with followers on social media platforms, such as
            Facebook, Twitter, and Instagram
            <br /> * Respond to comments and questions from followers <br />
            * Track social media analytics to measure the success of campaigns
            <br /> * Assist with the development and execution of social media
            marketing campaigns.
            <br />
            <br />
            <strong>Qualifications:</strong>
            <br /> * Enrolled in a college or university with a major in
            marketing, communications, or a related field <br />* Strong writing
            and editing skills <br /> * Experience with social media platforms,
            such as Facebook, Twitter, and Instagram
            <br /> * Ability to work independently and as part of a team
            <br /> * Strong attention to detail <br />* Excellent communication
            skills.
            <br />
            <br />
            <strong>Benefits:</strong> <br />* Unpaid internship
            <br /> * Opportunity to gain experience in social media marketing
            <br /> * Chance to work with a team of experienced professionals
            <br /> * Discounts on company products and services.
            <br />
            <br />
            <strong>To Apply:</strong> Please send your resume and cover letter
            to{" "}
            <a href="mailto:official.offtheweb@gmail.com">
              official.offtheweb@gmail.com
            </a>
            <br />
            Fill out this form:{" "}
            <a
              href="https://forms.gle/6NzowPd3wMZXHgek6"
              target="_blank"
              rel="noreferrer"
            >
              https://forms.gle/6NzowPd3wMZXHgek6
            </a>
          </div>
        </div>
      </div>
      <div class="accordion-item mt-2  " style={{ position: "relative" }}>
        <h2 class="accordion-header ">
          <button
            class="accordion-button collapsed"
            type="button"
            id="state2"
            onClick={(e) => toggle("state2")}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            2) Digital Marketing & SEO Intern
          </button>
        </h2>
        <div class="accordion-body">
          <strong>Department:</strong> Marketing
          <br />
          <br />
          <strong>Reports to:</strong> Marketing Manager
          <br />
          <br />
          <strong>Summary:</strong>
          <br />
          The Digital Marketing & SEO Intern is responsible for supporting the
          marketing team in the development and execution of marketing
          campaigns, as well as the optimization of the company's website for
          search engines. The intern will be responsible for creating and
          scheduling posts, conducting keyword research, and optimizing website
          content.
          <p
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            onClick={(e) => toggle("state2")}
            aria-controls="panelsStayOpen-collapseTwo"
            className="read-more cursor-pointer"
          >
            {active.state2 ? "read less..." : "read more..."}
          </p>
        </div>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          style={{ marginTop: "-30px" }}
          //   data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Responsibilities:</strong>
            <br />
            * Create and schedule social media posts that are aligned with the
            company's brand and marketing goals.
            <br />
            * Conduct keyword research and optimize website content for search
            engines.
            <br />
            * Track social media analytics to measure the success of campaigns.
            <br />
            * Assist with the development and execution of marketing campaigns.
            <br />
            <br />
            <strong>Qualifications:</strong>
            <br />
            * Enrolled in a college or university with a major in marketing,
            communications, or a related field.
            <br />
            * Strong writing and editing skills.
            <br />
            * Experience with social media platforms, such as Facebook, Twitter,
            and Instagram.
            <br />
            * Experience with SEO tools and techniques.
            <br />
            * Ability to work independently and as part of a team.
            <br />
            * Strong attention to detail.
            <br />
            * Excellent communication skills.
            <br />
            <br />
            <strong>Benefits:</strong>
            <br />
            * Unpaid internship.
            <br />
            * Opportunity to gain experience in social media marketing and SEO.
            <br />
            * Chance to work with a team of experienced professionals.
            <br />
            * Discounts on company products and services.
            <br />
            <br />
            <strong>To Apply:</strong>
            Please send your resume and cover letter to{" "}
            <a href="mailto:official.offtheweb@gmail.com">
              official.offtheweb@gmail.com
            </a>
            <br />
            Fill out this form:{" "}
            <a
              href="https://forms.gle/6NzowPd3wMZXHgek6"
              target="_blank"
              rel="noreferrer"
            >
              https://forms.gle/6NzowPd3wMZXHgek6
            </a>
          </div>
        </div>
      </div>
      <div class="accordion-item mt-2 mb-5" style={{ position: "relative" }}>
        <h2 class="accordion-header ">
          <button
            class="accordion-button collapsed"
            type="button"
            id="state3"
            onClick={(e) => toggle("state3")}
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            3) Content Writer Intern
          </button>
        </h2>
        <div class="accordion-body">
          <br />
          <strong>Department:</strong> Marketing
          <br />
          <br />
          <strong>Reports To:</strong> Content Manager
          <br />
          <br />
          <strong>Summary:</strong>
          <br />
          The Content Writer Intern will be responsible for writing and editing
          content for the company's website, blog, and social media channels.
          The intern will work closely with the Content Manager to develop and
          execute content marketing campaigns.
          <p
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            onClick={(e) => toggle("state3")}
            aria-controls="panelsStayOpen-collapseThree"
            className="read-more cursor-pointer"
          >
            {active.state3 ? "read less..." : "read more..."}
          </p>
        </div>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          style={{ marginTop: "-30px" }}
          //   data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Responsibilities:</strong>
            <br />
            * Write and edit blog posts, website copy, and social media posts.
            <br />
            * Conduct research and develop content ideas.
            <br />* Collaborate with the Content Manager and other team members
            to create and execute content marketing campaigns.
            <br /> * Stay up-to-date on industry trends and best practices.
            <br /> * Maintain a positive and professional attitude.
            <br />
            <br />
            <strong>Qualifications:</strong>
            <br />
            * Strong writing and editing skills.
            <br />
            * Excellent research and organizational skills.
            <br />
            * Ability to work independently and as part of a team.
            <br />
            * Passion for content marketing and social media.
            <br />
            * Strong attention to detail.
            <br />
            * Proficiency in Microsoft Office Suite.
            <br />
            <br />
            <strong>Benefits:</strong>
            <br />
            * Unpaid internship.
            <br />
            * Opportunity to learn from experienced content writers and
            marketers.
            <br />
            * Gain valuable experience in the content marketing industry.
            <br />
            * Build your portfolio and network with industry professionals.
            <br />
            <br />
            <strong>To Apply:</strong>
            Please send your resume and cover letter to{" "}
            <a href="mailto:official.offtheweb@gmail.com">
              official.offtheweb@gmail.com
            </a>
            <br />
            Fill out this form:{" "}
            <a
              href="https://forms.gle/6NzowPd3wMZXHgek6"
              target="_blank"
              rel="noreferrer"
            >
              https://forms.gle/6NzowPd3wMZXHgek6
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerComponent;
