import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import parse from "html-react-parser";

function JobDescription({ show, setShow, data }) {
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
            {data && data.jobTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "20px" }}>
          {data && (
            <>
              <p style={{ textAlign: "center" }}>
                <img
                  class="card-img-top"
                  style={{ width: "80px" }}
                  loading="lazy"
                  src={data.logo}
                  //   alt={data.category}
                />
              </p>
              <p>
                <b>About</b>
                <br />
                <p class="card-title">{data.about}</p>
              </p>
              <Table striped bordered hover className="job-table">
                <tbody>
                  <tr>
                    <th>Company</th>
                    <td>{data.company}</td>
                  </tr>
                  <tr>
                    <th>website</th>
                    <td>{data.website}</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>{data.location}</td>
                  </tr>
                  <tr>
                    <th>Experience</th>
                    <td>{data.experience}</td>
                  </tr>
                  <tr>
                    <th>Salary</th>
                    <td>{data.salary}</td>
                  </tr>
                  <tr>
                    <th>Last date</th>
                    <td>{data.lastDate === "" ? "ASAP" : data.lastDate}</td>
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
                {data.jobSummary}
              </p>
              <p className="job-additional">{parse(data.additional)}</p>
              <Button className="apply-now-btn primary-1" variant="primary">
                Apply Now
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default JobDescription;
