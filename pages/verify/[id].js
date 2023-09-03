import React from "react";
import dbConnect from "../../lib/mongoose";
import employeeModel from "../../models/employeeModel";

export async function getServerSideProps({ params }) {
  await dbConnect();
  const id = params.id;
  //   console.log(id);
  const data = await employeeModel
    .findOne({ "certificate.certificateNo": id }, { _id: 0, tasks: 0 })
    .lean();

  return {
    props: {
      data,
    },
  };
}
const Id = ({ data }) => {
  return (
    <div>
      {data && data.certificate ? (
        <div
          class="alert alert-primary"
          style={{ margin: "50px 10px", textAlign: "center" }}
          role="alert"
        >
          We are pleased to confirm that the certificate with certificate no.
          <b>' {data.certificate.certificateNo} '</b> has been issued by
          OFFTHEWEB.
          <br />
          The certificate is issued to : <b>' {data.certificate.name} '</b> on
          <b>' {data.certificate.issueDate} '</b> as per our records.
          <br />
          <br /> If you have any questions or require additional assistance,
          please do not hesitate to{" "}
          <a
            style={{ color: "#58151c" }}
            href="https://www.offtheweb.in/contact"
          >
            <b> contact us</b>
          </a>
          .
        </div>
      ) : (
        <div
          class="alert alert-danger"
          style={{ margin: "50px 10px", textAlign: "center" }}
          role="alert"
        >
          We regret to inform you that the certificate provided does not appear
          to have been issued by our organization.
          <br /> If you have any questions or require additional assistance,
          please do not hesitate to{" "}
          <a
            style={{ color: "#58151c" }}
            href="https://www.offtheweb.in/contact"
          >
            <b> contact us</b>
          </a>
          .
        </div>
      )}
    </div>
  );
};

export default Id;
