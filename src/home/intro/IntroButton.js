import * as React from "react";
import { motion } from "framer-motion";

const IntroButton = ({clicked, onLearnMore}) => {
  return (
    <motion.div 
        initial={{ y:-10, opacity: 0 }}
        animate={{ y:0, opacity: 1}} 
        transition={{duration: 0.5,
          delay: 0.5,
          ease: "easeInOut"}}
        // variants={buttonV}
        // animate={clicked ? 'open' : 'closed'}
        onClick={()=> onLearnMore()}
        style={{ backgroundColor: 'black', width: '160px', height: '50px' }}
        className="mt-5 border border-solid border-white text-white relative flex justify-center items-center text-sm uppercase font-semibold font-proxima cursor-pointer" 
        whileHover={{ backgroundColor: 'rgb(245, 236, 66)', color: 'black', border: '0' }}
        whileTap={{ backgroundColor: 'rgb(245, 236, 66)', color: 'black', border: '0' }}>
        <span>Who am i</span>
    </motion.div>
  )
};

export default IntroButton;