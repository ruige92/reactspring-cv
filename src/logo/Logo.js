import React from 'react';
import { motion, useAnimation } from "framer-motion"
const Logo = () => {
    return (
        <motion.div 
            initial={{opacity:0, x:-10}}
            animate={{opacity:1, x:0}}
            className="absolute text-white" style={{top:'100px', right:'120px'}}>
          BF
        </motion.div>
    )
}

export default Logo;