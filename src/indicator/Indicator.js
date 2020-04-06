import React, {useEffect} from 'react';
import { motion, useAnimation, AnimatePresence } from "framer-motion"
const Indicator = ({index, total}) => {
    const indicatorControl = useAnimation();

    useEffect(()=>{
        console.log('newPAGE!');
        if(index>1){
            indicatorControl.start({
                x:[0, 40, -30, -30],
                opacity:[1, 0, 0, 1],
                transition: {duration: 1}
            })
        }
    },[index]);
    return (
        <AnimatePresence>
            <motion.div 
                initial={{opacity:0, x:-10}}
                animate={{opacity:1, x:0, transition: {duration: 0.5, delay: 2}}}
                className="absolute z-20 text-white text-center overflow-hidden" 
                style={{top:'100px', left:'120px', width:'40px'}}>
                <motion.div
                    initial={{y:0}}
                    key={index}
                    exit={{y:-10}}
                    className="mt-3 mb-3">{index}
                </motion.div>
                    <motion.div
                        initial={{opacity:1, x:-30}}
                        animate={indicatorControl}
                        style={{height:'3px', background:'white'}}>
                    </motion.div>
                <motion.div
                    className="mt-3 mb-3">6
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Indicator;