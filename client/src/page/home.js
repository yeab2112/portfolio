import React from 'react';
import '../component/home.css';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className="full-page"> 
      <div className="overlay"></div> {/* Semi-transparent overlay */}
      <motion.div className="d-flex flex-column align-items-center justify-content-center vh-100 content" 
      initial={{x:-300, 
        scale:0.5}} animate={{x:0,scale:1}}
        transition={{duration:1}}> 
        
        <h1 className="display-4 mb-3"><font>Yeabsira Aychiluhim</font></h1>
        <p className="lead"><font>Junior FullStack Developer</font></p>
      </motion.div>

       </div>
  );
}

export default Home;

