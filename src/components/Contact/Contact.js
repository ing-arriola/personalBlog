import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 1200);

  const effect1 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div className="contact-container">
      {visible ? (
        <div className="big-name">
          <motion.p
            variants={effect1}
            initial="visible"
            animate="hidden"
            transition={{ delay: 0.6 }}
          >
            Jaime Arriola
          </motion.p>
        </div>
      ) : (
        <div className="form-container">
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
            <button className="form-button">Send</button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
