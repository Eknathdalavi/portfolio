import React from 'react';
import { motion } from 'framer-motion';
import '../css/Project.css'; // To keep styles in a separate file

const Project = () => {
  return (
    <motion.section
      className="section projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <motion.ul
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="projects-list"
      >
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="project-item"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8rn46EgHiewAq2OmLPJaaFYjj0vLjKVdKA&s"
            alt="Project 1"
            className="project-image"
          />
          <div className="project-details">
            <h3>Project 1 - Web App</h3>
            <p>A dynamic web app.</p>
            <a 
              href="https://yourproject1.com" 
              className="view-project-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </motion.li>
        
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="project-item"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9fd9SIjUytUpCBwFp4FZkFMlcc8aade7PQ&s"
            alt="Project 2"
            className="project-image"
          />
          <div className="project-details">
            <h3>Project 2 E-commerce</h3>
            <p>An e-commerce website.</p>
            <a 
              href="https://yourproject2.com" 
              className="view-project-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </motion.li>
        
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="project-item"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnIUpfxrtD_FuQhg1oVFGdKT82OHani6d9Q&s"
            alt="Project 3"
            className="project-image"
          />
          <div className="project-details">
            <h3>Project 3 - Portfolio</h3>
            <p>A personal portfolio.</p>
            <a 
              href="https://gaju-portfolio.netlify.app/" 
              className="view-project-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default Project;
