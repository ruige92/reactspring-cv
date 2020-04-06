import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
const Translate = ({title, meanings}) => {
    return (
        <div>
            <motion.div 
                initial={{opacity:0, x: 30}}
                animate={{opacity:1, x: 0}}
                transition={{x: {type: "spring", stiffness: 50}}}
                className="text-xl text-black text-center" 
                style={{background:'white'}}>
                    {title}:
            </motion.div>
            <motion.div className="text-white" transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}>
                {meanings.map((m,i) => 
                    <motion.div 
                        initial={{y:10, opacity:0}} 
                        transition={{x: {type: "spring", stiffness: 50}, delay: i * 0.1}}
                        animate={{y:0, opacity:1}}
                        key={m}>
                        {m}
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Translate;