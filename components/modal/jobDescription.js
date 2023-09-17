import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

function JobDescription({ show, setShow }) {
  //   const [show, setShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        centered
        // dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Nucleus Software Off Campus Drive 2023 for Assistant Software
            Engineer | B.E/B.Tech | Noida
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "20px" }}>
          <p style={{ textAlign: "center" }}>
            <img
              class="card-img-top"
              style={{ width: "80px" }}
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/en/2/2a/Nucleus_Logo.png"
              //   alt={data.category}
            />
          </p>
          <p>
            <b>About</b>
            <br />
            <p class="card-title">
              Nucleus Software Off Campus Drive 2023 for Assistant Software
              Engineer | B.E/B.Tech | Noida
            </p>
          </p>
          <Table striped bordered hover className="job-table">
            <tbody>
              <tr>
                <th>Company</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>website</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>Job Role</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>Qualification</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>Experience</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>Salary</th>
                <td>lorem</td>
              </tr>
              <tr>
                <th>Last date</th>
                <td>lorem</td>
              </tr>

              {/* <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </Table>
          <p>
            <b>Job Description</b>
            <br />
            Software Engineer will deliver results through delivery of Software
            product systems and components. The person will be responsible for
            developing high performance and highly scalable work products, to
            serve hundreds of thousands of transactions.
          </p>
          <p>
            <b>Required Skills</b>
            <br />
            We are looking for young creative technologists who are proud of
            their creations be it code, design, architecture or solution.
            Professionals who wish to be part of our mission and help us build
            and evolve world class software products. The role is in the Product
            Engineering team. Following are some expectations from the role:
          </p>
          <p>
            <b>Eligibility</b>
            <br />
            <ul className="ms-2">
              <li>Eligibility Criteria – B.E/B.Tech Job</li>
              <li> Branch – CS/IT/EC</li>
              <li>Passing out year – 2023</li>
              <li>
                Minimum 60% marks throughout academics, with no backlogs
                Candidates should not have appeared in selection test, in the
                last three months
              </li>
            </ul>
          </p>
          <p>
            <b>Selection Process</b>
            <br />
            Online Aptitude test Technical Test Personal Interview (Focusing on
            his/her attitude)
          </p>
          <Button className="apply-now-btn primary-1" variant="primary">
            Apply Now
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default JobDescription;
