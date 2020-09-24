import React from "react";
import { motion, useAnimation } from "framer-motion";
const Contact = () => {
  const parentVariants = {};

  return (
    <motion.div variants={parentVariants}>
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
  );
};

export default Contact;
