import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom'
import './Menu.css';
import { motion, useAnimation } from "framer-motion";
import {
    Link
  } from "react-router-dom";

const Menu = ({clicked}) => {
    const location = useLocation();
    const menuItemControl = useAnimation();

    useEffect(()=>{
        const path = location.pathname;
        const pagesToTurnWhite = ['/projects', '/contact'];
        if (clicked & pagesToTurnWhite.includes(path)) {
            turnWhite();
        } else if (clicked) {
            turnBlack();
        }
    },[location, clicked])

    const turnBlack = () => {
        menuItemControl.start({color:'black'});
    }

    const turnWhite = () => {
        menuItemControl.start({color:'white'});
    }

    return (
        <motion.div 
            initial={{ top:-10, opacity:0 }}
            animate={{ top: 30, opacity: 1 }} 
            transition={{duration:0.7, delay: 0.9}}
            // variants={variants}
            // animate={clicked ? 'open' : 'closed'}
            className="absolute top-0 flex text-white uppercase w-full flex justify-center font-proxima font-semibold text-xs tracking-widest">
            <motion.li
                style={{listStyle:'none'}}
                animate={menuItemControl}
                >
                <Link className="m-10" to="/">Home</Link>
            </motion.li>
            <motion.li
                style={{listStyle:'none'}}
                animate={menuItemControl}
                >
                <Link className="m-10" to="projects">Projects</Link>
            </motion.li>
            <motion.li
                style={{listStyle:'none'}}
                animate={menuItemControl}
                >
                <Link className="m-10" to="contact">Contact</Link>
            </motion.li>
        </motion.div>
    )
}

export default Menu;