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
            transition={{ delay: 1 }}
          >
            Jaime Arriola
          </motion.p>
        </div>
      ) : (
        <motion.div>
          <h1>Let me know how can I help you out :)</h1>
          <motion.form>
            <label>Name</label>
            <input type="input" name="name" id="email" required></input>
            <label>Email</label>
            <input type="email" name="email" id="email" required></input>
            <label>Subject</label>
            <input type="text" name="subject" id="subject" required></input>
            <label>Your message</label>
            <textarea name="" id=""></textarea>
          </motion.form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;
