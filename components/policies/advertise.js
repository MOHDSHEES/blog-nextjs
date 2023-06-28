import Link from "next/link";
import React from "react";

const AdvertiseComponent = () => {
  return (
    <div>
      <div className=" py-3 px-4 mb-3" style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          {/* <h2 className=" mt-4">Career Opportunities </h2> */}
          <h2 className="mb4">Advertise Policies</h2>
        </div>
      </div>
      <div className=" py-3 px-4 mb-3">
        <p>
          Thank you for choosing OffTheWeb for your blogging needs! Please find
          below the terms and conditions for advertising on our website:
        </p>
        <p>
          <b>1. Advertising Content:</b> We reserve the right to reject or
          remove any advertisement that we deem inappropriate, offensive, or not
          in line with our values. Advertisements must be relevant to our
          readers and must not contain any false, misleading, or deceptive
          information.
        </p>
        <p>
          <b>2. Payment:</b> All payments must be made in advance and are
          non-refundable. We accept payment via credit card, PayPal, or wire
          transfer. The prices for advertising on our website may vary based on
          the size, placement, and duration of the advertisement.
        </p>
        <p>
          <b>3. Ad Placement:</b> We will determine the placement of your
          advertisement on our website. However, we will do our best to
          accommodate your preferences whenever possible.
        </p>
        <p>
          <b>4. Ad Format:</b> All advertisements must be in one of the
          following formats: JPEG, PNG, or GIF. The file size should not exceed
          2 MB.
        </p>
        <p>
          <b>5. Ad Duration:</b> The duration of your advertisement will depend
          on the package you select. You may choose to advertise for a minimum
          of one week or for a maximum of six months.
        </p>
        <p>
          <b>6. Changes to Advertisements:</b> Once your advertisement is live
          on our website, no changes may be made to it until the end of the
          agreed-upon duration.
        </p>
        <p>
          <b>7. Termination:</b> We reserve the right to terminate an
          advertisement at any time without notice or refund if it violates our
          terms and conditions.
        </p>
        <p>
          <b>8. Liability:</b> We will not be held liable for any loss or damage
          that may arise from the use of our website or the placement of
          advertisements on our website.
        </p>
        <p className="a-red">
          By placing an advertisement on OffTheWeb, you agree to these terms and
          conditions. If you have any questions or concerns, please do not
          hesitate to <Link href="/contact">contact us</Link>.
        </p>
        <p className="a-red">
          Email:{" "}
          <a href="mailto:official.offtheweb@gmail.com">
            official.offtheweb@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdvertiseComponent;
