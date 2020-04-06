import React, {useEffect, useState} from "react";
import { motion, useAnimation } from "framer-motion";
import Indicator from "../indicator/Indicator";
const Scroll = ({index, onScroll}) => {
    return (
        <>
        <Indicator index={index}/>
        <motion.div 
            initial={{opacity:0, x: -10, }}
            animate={{opacity:1, x: 0, transition: {duration: 0.5, delay: 2}}}
            style={{ bottom:'100px', width: '280px'}}
            whileHover={{scale:1.1}}
            className="absolute z-30 text-md font-tg_l flex text-white flex justify-center font-proxima tracking-widest z-10"
            onClick={()=>{
                onScroll();
            }}>
               {`<Scroll />`}
        </motion.div>
        </>
    )
}

export default Scroll;