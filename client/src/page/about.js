import React from 'react';
import { Row } from 'react-bootstrap';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../component/about.css'; // Import the CSS file for styling

function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{ scaleX }} // Apply scaleX to the container, not directly to progress bar
        className="progress-bar-animate"
      >
        <div className="progress-bar" /> {/* The progress bar itself */}
      </motion.div>
      <Row className="justify-content-center h-100 m-5 about-content">
        <h2 className="text-center mt-4">ABOUT ME</h2>
        <p>
          Hello! I am a passionate web developer with a strong foundation in
          front-end and back-end technologies. I thrive on building dynamic and
          responsive web applications that provide seamless user experiences.
        </p>
        <p>
          My expertise includes:
          <ul>
            <li>HTML & CSS: Crafting clean and accessible layouts.</li>
            <li>
              JavaScript: Implementing interactive features and functionality.
            </li>
            <li>React: Building efficient and modern user interfaces.</li>
            <li>
              Express & API Development: Creating robust server-side applications.
            </li>
            <li>
              Database Management: Proficient in both MongoDB and MySQL for data
              storage solutions.
            </li>
            <li>
              Version Control: Utilizing Git for source code management and
              collaboration.
            </li>
          </ul>
        </p>

        <h1 className="mt-5">My Values</h1>
        <p>
          - Collaboration: I value teamwork and believe that great ideas come from
          diverse perspectives.
        </p>
        <p>
          - Innovation: I am committed to staying updated with the latest trends
          and technologies to deliver modern solutions.
        </p>

        <h1 className="mt-5">Why Work With Me?</h1>
        <p>
          - Problem-Solving: I approach challenges with a positive mindset,
          finding creative solutions to complex issues.
        </p>
        <p>
          - Communication: I prioritize clear and open communication to ensure a
          smooth workflow and successful outcomes.
        </p>

        <h1 className="mt-5">Contact Me</h1>
        <p>
          If you have any questions or would like to collaborate, feel free to
          reach out:
        </p>
        <ul>
          <li>Email: yeabsiraaychiluhim2112@gmail.com.com</li>
          <li>Phone: 0923547840</li>
          <li>Location: Addis Ababa</li>
        </ul>
        <h4 className="text-center mt-4">
          Thank you for visiting my portfolio. I look forward to connecting with
          you!
        </h4>
      </Row>
    </>
  );
}

export default About;
