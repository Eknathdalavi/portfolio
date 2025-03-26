import React from "react";
import { motion } from "framer-motion";
import "../css/Technologies.css"; // Link to the CSS file
const techs = [
  { icon: "fab fa-html5", name: "HTML5", colorClass: "html" },
  { icon: "fab fa-css3-alt", name: "CSS3", colorClass: "css" },
  { icon: "fab fa-js-square", name: "JavaScript", colorClass: "js" },
  { icon: "fab fa-react", name: "React.js", colorClass: "react" },
  { icon: "fab fa-node-js", name: "Node.js", colorClass: "node" },
  { icon: "fab fa-java", name: "Java", colorClass: "java" },         // Java
  { icon: "fas fa-server", name: "Express.js", colorClass: "express" },
  { icon: "fas fa-database", name: "MySQL", colorClass: "mysql" },    // MySQL
  { icon: "fas fa-database", name: "MongoDB", colorClass: "mongodb" },
  { icon: "fas fa-cogs", name: "Postman", colorClass: "postman" },
  { icon: "fab fa-github", name: "GitHub", colorClass: "github" },   // GitHub
  { icon: "fab fa-git-alt", name: "Git", colorClass: "git" },        // Git
]; 


// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Technologies = () => {
  return (
    <motion.section
      className="technologies"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 style={{textAlign:"center",marginTop:"50px"}}>Technologies I've Worked With</h2>
      <motion.div className="tech-icons">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className={`tech-icon ${tech.colorClass}`} // Add color class
            variants={itemVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className={tech.icon}></i>
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Technologies;
