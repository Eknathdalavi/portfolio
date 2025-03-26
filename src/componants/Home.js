import "../css/Home.css"; 
import { motion } from "framer-motion";

const Home = ()=>{
    return(
        <>
        <section className="header" id="hero">
      {/* Profile Image with Framer Motion */} 
      {/* C:\Users\Eknath Dalvi\Desktop\IMG-20250326-WA0009.jpg */}
      <motion.img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="profile-img"
        whileHover={{ scale: 1.1 }}
      />

      {/* Heading with Framer Motion */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, color: "#007bff" }}
      >
        Hi, I'm <span className="name">Eknath Dalavi</span>
      </motion.h1>

      {/* Description with Framer Motion */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{ scale: 1.02, color: "#555" }}
      >
        Full Stack Web Developer | Passionate About Coding & Problem Solving
      </motion.p>

      {/* Download CV Button with Framer Motion */}
      <motion.div
        className="download-cv"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <a href="/Eknath Dalavi CV.pdf" download>
          <motion.button
            className="download-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#007bff", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
          >
            Download My CV
          </motion.button>
        </a>
      </motion.div>
    </section>
        </>
    )
}
export default Home;