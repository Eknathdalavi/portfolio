import { motion } from "framer-motion";
import "../css/About.css";

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(0,123,255,0.8)" }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, textShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
      >
        Hi! I'm Eknath Dalavi, a passionate Full Stack Web Developer with a strong foundation in both
        front-end and back-end technologies. I hold a Bachelor's in Computer Applications (BCA), where
        I gained a deep understanding of programming, problem-solving, and software development principles.
        My expertise lies in creating responsive, user-friendly, and performance-optimized web applications.
        I specialize in modern technologies such as React.js, Node.js, Express, MongoDB, and SQL, and I'm always
        eager to learn and explore new frameworks and tools.
        I believe in building clean, scalable, and maintainable code that not only meets the client's needs
        but also provides an excellent user experience. When I'm not coding, you can find me exploring new tech
        trends, solving programming challenges, or working on personal projects to sharpen my skills.
      </motion.p>
    </motion.section>
  );
};

export default About;
