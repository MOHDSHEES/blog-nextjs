import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Edit from "../../components/editor/editor";

const Post = () => {
  const [validated, setValidated] = useState(false);
  const [state, setstate] = useState({
    companyName: "",
    website: "",
    logo: "",
    about: "",
    jobTitle: "",
    experience: "",
    location: "",
    applyLink: "",
    salary: "",
    lastDate: "",
  });
  // console.log(state);
  const Inputchange = (event) => {
    const { name, value } = event.target;
    setstate({
      ...state,
      [name]: value,
    });
  };

  // console.log(state);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <div className="container mt-5">
        <div>
          <div
            style={{ background: "white" }}
            class="d-flex align-items-center justify-content-center  py-2 px-4 mb-3"
          >
            <h2 className="">Post Free Jobs</h2>
          </div>
        </div>
        <small style={{ color: "red" }}>
          <b>Note</b>: Please fill out the complete form to post a Job.{" "}
        </small>
        <Accordion className="mt-2" defaultActiveKey="0">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1) Company Details</Accordion.Header>
              <Accordion.Body style={{ paddingBottom: "10px" }}>
                <Row>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Company Name *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="companyName"
                      value={state.companyName}
                      onChange={Inputchange}
                      placeholder="Enter company name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter the Company Name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Website *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="website"
                      value={state.website}
                      onChange={Inputchange}
                      placeholder="Enter company website"
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter valid URL of the website
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-3"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Logo *</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Enter url of company LOGO"
                        aria-describedby="inputGroupPrepend"
                        name="logo"
                        value={state.logo}
                        onChange={Inputchange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter the valid URL of the company's Logo
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="validationCustom06"
                  >
                    <Form.Label>About *</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                      name="about"
                      value={state.about}
                      onChange={Inputchange}
                      placeholder="Enter brief information about company"
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter brief info about the company
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2) Job Details</Accordion.Header>
              <Accordion.Body style={{ paddingBottom: "15px" }}>
                <Row>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Job Title *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="jobTitle"
                      value={state.jobTitle}
                      onChange={Inputchange}
                      placeholder="Enter Job title"
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter job title
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Apply Link *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="applyLink"
                      value={state.applyLink}
                      onChange={Inputchange}
                      placeholder="Enter apply link"
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter a valid URL for the Job application page.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    className="mb-3"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Experience *</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Fresher/1-2 yrs/3+ yrs"
                        name="experience"
                        value={state.experience}
                        onChange={Inputchange}
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter the experience required (i.e Freshers/1-2 yrs)
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom02"
                  >
                    <Form.Label>Location *</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      type="select"
                      name="location"
                      value={state.location}
                      onChange={Inputchange}
                      aria-label="Default select example"
                    >
                      <option value="">Choose location</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On Site">On Site</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Choose any job location
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom04"
                  >
                    <Form.Label>Salary *</Form.Label>
                    <Form.Control
                      type="text"
                      name="salary"
                      value={state.salary}
                      onChange={Inputchange}
                      placeholder="Unpaid/3.5 LPA"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter the salary (i.e Unpaid/3.5 LPA)
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    md="4"
                    controlId="validationCustom03"
                  >
                    <Form.Label>Last Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="lastDate"
                      value={state.lastDate}
                      onChange={Inputchange}
                      placeholder="Enter last date to apply"
                    />
                  </Form.Group>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3) Addition Details</Accordion.Header>
              <Accordion.Body style={{ paddingBottom: "15px" }}>
                <Edit />
                <Button className="primary-1 mt-3" type="submit">
                  Save
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Form>
        </Accordion>
      </div>
    </div>
  );
};

export default Post;
