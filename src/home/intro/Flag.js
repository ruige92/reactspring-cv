import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion"

const Flag = ({clicked}) => {
    const location = useLocation();
    const flagControls = useAnimation();
    const svgControls = useAnimation();

    useEffect(()=>{
        const path = location.pathname;
        const pagesToTurnWhite = ['/projects', '/contact'];
        if(clicked & pagesToTurnWhite.includes(path)){
            openFlag();
            turnBackgroundYellow();
            turnBlackSVG();
        } else if (clicked) {
            openFlag();
            turnBackgroundBlack();
            turnWhiteSVG();
        }
    },[location, clicked])

    const openFlag = () => {
        flagControls.start({
            opacity:1, x:-30
        })
    }
    const turnBackgroundYellow = () => {
        flagControls.start({
            backgroundColor: 'rgb(245, 236, 66)'
        })
    }
    const turnBackgroundBlack = () => {
        flagControls.start({
            backgroundColor: 'black'
        })
    }
    const turnWhiteSVG = () => {
        svgControls.start({
            fill: '#fff'
        })
    }
    const turnBlackSVG = () => {
        svgControls.start({
            fill: '#000'
        })
    }

    return (
        <motion.div 
            animate={flagControls}
            transition={{ duration: 1 }}
            style={{ backgroundColor: 'black', width: '40px', height: '80px', bottom: '20px', x:-300, opacity: 0 }}
            className="mt-5 text-white absolute flex flex-col justify-center items-center text-sm uppercase font-semibold font-proxima cursor-pointer" 
            whileHover={{ x: -5}}>
            <span className="m-1" onClick={()=> window.open("https://www.linkedin.com/in/borui/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <motion.path 
                        initial={{fill:'#fff'}}
                        animate={svgControls}
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </span>
            <span className="m-1" onClick={()=> navigator.clipboard.writeText('hi@borui.co.uk')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <motion.path 
                        initial={{fill:'#fff'}}
                        animate={svgControls} 
                        d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
            </span>
        </motion.div>
    )
};

export default Flag;