import React, { useState } from "react";
import { message } from "antd";
import { openMessage, closeMessage } from "../components/functions/message";
import axios from "axios";
import Head from "next/head";
const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [disabled, setdisabled] = useState(false);
  const [State, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function clearState() {
    setState({ name: "", email: "", subject: "", message: "" });
  }
  const Inputchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...State,
      [name]: value,
    });
  };

  async function submitHandler(e) {
    e.preventDefault();
    setdisabled(true);
    openMessage(messageApi, "Sending...");
    // console.log(State);
    const { data } = await axios.post("/api/email/contactUs", {
      State,
    });
    // console.log(data);
    if (data.success) {
      setdisabled(false);
      clearState();
      closeMessage(messageApi, data.message, "success");
    } else {
      setdisabled("false");
      closeMessage(messageApi, data.message, "error");
    }
  }
  return (
    <>
      <Head>
        <title>ContactUs</title>
        <meta
          name="description"
          content="Stay ahead of the curve with OFFTHEWEB - your source for the latest in tech and beyond."
          data-rh="true"
        />
      </Head>
      {contextHolder}
      <div className="container mt-5">
        <div class="col-12 mb-5" style={{ textAlign: "center" }}>
          <h2 class="contact-title">Contact Us For Any Queries</h2>
        </div>
        <div class="row justify-content-between contactus-flex">
          <div class="col-lg-5 ">
            <div class="media contact-info">
              <span class="contact-info__icon">
                <i class="ti-home"></i>
              </span>
              <div class="media-body">
                <h3 className="mb-2">Get in touch</h3>
                <p>
                  We welcome your feedback, questions, and suggestions. If you
                  have any inquiries or would like to get in touch with us,
                  please fill out the contact form and we will get back to you
                  as soon as possible. Thank you for your interest in OFFTHEWEB.
                </p>
              </div>
            </div>

            <div class="media contact-info">
              <span class="contact-info__icon">
                <i class="ti-email"></i>
              </span>
              <div class="media-body nav-a a-red ">
                <span>
                  Email:{" "}
                  <a
                    className="mt-3"
                    href="mailTo:official.offtheweb@gmail.com"
                  >
                    official.offtheweb@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <form
              onSubmit={(e) => submitHandler(e)}
              class="form-contact contact_form"
              method="post"
              id="contactForm"
            >
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      class="form-control w-100"
                      rows="8"
                      id="message"
                      name="message"
                      value={State.message}
                      onChange={Inputchange}
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="name"
                      id="name"
                      value={State.name}
                      onChange={Inputchange}
                      type="text"
                      required
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      value={State.email}
                      onChange={Inputchange}
                      required
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter email address'"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="subject"
                      id="subject"
                      value={State.subject}
                      onChange={Inputchange}
                      type="text"
                      required
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mt-3">
                <button
                  type="submit"
                  disabled={disabled}
                  class="button button-contactForm boxed-btn"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
