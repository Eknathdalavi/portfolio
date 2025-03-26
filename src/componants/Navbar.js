import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Motion variants for navbar links
  const navLinkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  // Motion variants for each individual link
  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className={`navbar ${darkMode ? "dark" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{"ED"}</h1>

      {/* Animated Nav Links */}
      <motion.div
        className={`nav-links ${isOpen ? "open" : ""}`}
        variants={navLinkVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={linkVariants}>
          <Link to="/">Home</Link>
        </motion.span>
        <motion.span variants={linkVariants}>
          <Link to="/about">About</Link>
        </motion.span>
        <motion.span variants={linkVariants}>
          <Link to="/projects">Projects</Link>
        </motion.span>
        <motion.span variants={linkVariants}>
          <Link to="/contact">Contact</Link>
        </motion.span>
        <motion.span variants={linkVariants}>
          <Link to="/technologies">Technologies</Link>
        </motion.span>
      </motion.div>

      {/* Menu Button */}
      <motion.button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {isOpen ? "✖" : "☰"}
      </motion.button>

      {/* Dark Mode Toggle Button */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {darkMode ? "🌞" : "🌙"}
      </motion.button>
    </motion.nav>

    
  );
};

export default Navbar;
