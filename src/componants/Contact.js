import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../css/Contact.css";

const Contact = () => {
  // State to store the form submission status
  const [responseMessage, setResponseMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_717j9l7", // Replace with your EmailJS Service ID
        "template_bmvxv5q", // Replace with your EmailJS Template ID
        e.target,
        "4oN0168dd2njqsIoB" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setResponseMessage("Thank you for your message! I will get back to you soon.");
          e.target.reset(); // Reset form after successful submission
        },
        () => {
          setResponseMessage("Error sending message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Get in Touch</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          required
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      <div>
        <a href="/contact"></a>
      </div>

      {/* Show success or error response after submission */}
      {responseMessage && (
        <motion.p
          className="response-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {responseMessage}
        </motion.p>
      )}
    </motion.section>
  );
};

export default Contact;
