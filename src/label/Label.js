import React, {useEffect, useState} from "react";
import { motion, useAnimation } from "framer-motion";

const Label = ({clicked, prefix, wordsToDisplay}) => {
    const wordControl = useAnimation();
    const wordControl2 = useAnimation();
    const wordControl3 = useAnimation();
    const wordControl4 = useAnimation();
    const [finished, setFinish] = useState(true);

    useEffect(()=>{
        if(finished) {
            console.log('play')
            setFinish(false);
            init();
        }
    },[finished])

    // const wordsToDisplay = [
    //     'am a full-stack developer',
    //     'have a thirst for knowledge',
    //     `'m always up for new things`,
    //     'take pride in multiculturalism',
    //     'aim to make a positive impact',
    // ];
    
    async function init() {
        await wordControl.start({opacity:1, y:0, display: 'inline', transition: { duration: 1 }});
        await wordControl.start({opacity:0, y:-10, transition: { duration: 1, delay:4 }, transitionEnd: { y:10, display: "none" }});

        await wordControl2.start({opacity:1, y:0, display: 'inline', transition: { duration: 1 }});
        await wordControl2.start({opacity:0, y:-10, transition: { duration: 1, delay:4 }, transitionEnd: { y:10, display: "none" }});

        await wordControl3.start({opacity:1, y:0, display: 'inline', transition: { duration: 1 }});
        await wordControl3.start({opacity:0, y:-10, transition: { duration: 1, delay:4 }, transitionEnd: { y:10, display: "none" }});

        await wordControl4.start({opacity:1, y:0, display: 'inline', transition: { duration: 1 }});
        await wordControl4.start({opacity:0, y:-10, transition: { duration: 1, delay:4 }, transitionEnd: { y:10, display: "none" }});
        setFinish(true);
    }
    
    return (
        <motion.div 
            initial={{opacity:0, x: 10, }}
            animate={{opacity:1, x: 0, transition: {duration: 0.5, delay: 2}}}
            style={{right:'40px', bottom:'100px', width: '280px'}}
            className="absolute text-md font-tg_l flex text-white flex justify-center font-proxima tracking-widest z-10">
            {prefix} 
                <motion.div
                    initial={{opacity:0, y:10, display:'none'}}
                    className="ml-2 font-tg_l"
                    style={{color:'#616161'}}
                    animate={wordControl}
                >
                    {wordsToDisplay[0]}
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:10, display:'none'}}
                    className="ml-2 font-tg_l"
                    style={{color:'#616161'}}
                    animate={wordControl2}
                >
                    {wordsToDisplay[1]}
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:10, display:'none'}}
                    className="ml-2 font-tg_l"
                    style={{color:'#616161'}}
                    animate={wordControl3}
                >
                    {wordsToDisplay[2]}
                </motion.div>
                <motion.div
                    initial={{opacity:0, y:10, display:'none'}}
                    className="ml-2 font-tg_l"
                    style={{color:'#616161'}}
                    animate={wordControl4}
                >
                    {wordsToDisplay[3]}
                </motion.div>
        </motion.div>
    )
}

export default Label;