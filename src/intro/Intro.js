import React, {useState, useRef, useEffect} from 'react';
import Translate from "../translate/Translate";
import { motion, useAnimation, AnimatePresence, useCycle } from "framer-motion"

const Intro = ({}) => {
    const [hoveredBo, setHoverBo] = useState(false);
    const [hoveredRui, setHoverRui] = useState(false);
    useEffect(()=>{
        console.log(hoveredBo, hoveredRui);
    }, [hoveredBo, hoveredRui])
    return (
        <>
        <div className="flex items-center justify-center">
            <motion.div 
                className="font-cn2 relative"
                style={{fontSize: '200px', color: 'white', width:'400px', height:'400px'}}
            >
                <motion.div 
                className="absolute z-50 flex justify-center items-center" 
                initial={{opacity:0, x:10}}
                animate={{opacity:1, x: hoveredBo ? -10 : 0, textShadow: hoveredBo ? '8px 7px 20px #000000' : 'none',
                zIndex: hoveredBo ? '99' : '50', transition: {duration: 1}}}
                style={{left: '60px', top: '60px', width:'140px', height:'140px'}}
                onMouseEnter={() => setHoverBo(true)}
                onMouseLeave={() => setHoverBo(false)}
                transition={{duration:0.5}}>
                博
                </motion.div>
                <motion.div 
                className="absolute z-50 flex justify-center items-center" 
                initial={{opacity:0, x:-10}}
                animate={{opacity:1, x: hoveredRui ? 10 : 0, textShadow: hoveredRui ? '-2px 0px 20px #000000' : 'none',
                zIndex: hoveredRui ? '99' : '50', transition: {duration: 1}}}
                onMouseEnter={() => setHoverRui(true)}
                onMouseLeave={() => setHoverRui(false)}
                transition={{duration:0.5}}
                style={{right: '80px',bottom: '135px', width:'140px', height:'140px'}}>
                瑞
                </motion.div>
            </motion.div>
           
        </div>
        <div className="absolute" style={{right:'280px'}}>
            {hoveredBo ? <Translate title={'Bó'} key="Bo" meanings={['plentiful', 'ample', 'extensive']}/> : null}
            {hoveredRui ? <Translate title={'Ruì'} key="Rui" meanings={['lucky', 'propitious', 'auspicious']}/> : null}
         </div>
        </>
    )
}

export default Intro;
