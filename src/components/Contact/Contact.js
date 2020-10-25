import React from "react";

import { FaRegSmileBeam } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="form-container">
      <div className="contact-title">
        <h1>
          Let me know how can I help you <FaRegSmileBeam />{" "}
        </h1>

        <p className="contac-descirption">
          Thanks for contacting me, I'd be happy to respond your questions about
          hiring me
        </p>
      </div>
      <form
        name="contact"
        className="contact-form"
        action="/contact"
        method="POST"
        data-netlify-recaptcha="true"
        netlify
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name</label>
        <input
          type="input"
          name="name"
          id="email"
          placeholder="Name"
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        ></input>
        <label>Your message</label>
        <textarea
          name="message"
          placeholder="Please, type here how can I help you"
          id="message"
        ></textarea>

        <div data-netlify-recaptcha="true"></div>

        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
