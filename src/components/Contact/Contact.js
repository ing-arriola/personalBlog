import React from "react";

const Contact = () => {
  return (
    <div
      className="form-container"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <div className="contact-title">
        <h1>Let me know how can I help you</h1>
        <p className="contac-descirption">
          Thanks for consider reach me, I'd be happy to answer your hiring
          questions
        </p>
      </div>
      <form className="contact-form">
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
        <div>
          <div data-netlify-recaptcha="true"></div>
        </div>
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
