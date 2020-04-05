import React, {useState, useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"
import IntroButton from './intro/IntroButton';

const variants = {
  closed: { backgroundColor: 'black', color: 'white' },
  open: { backgroundColor: 'rgb(245, 236, 66)', color: 'black' },
}

const titleV = {
  closed: {opacity: 1, display:'inline'},
  open: {opacity: 0, display:'none'}
}

const Home = ({clicked, clickedReadMore}) => {
  const mottoControls = useAnimation();
  
  const clickReadMore = () => {
    clickedReadMore();
    mottoAnimate();
  }

  const mottoAnimate = () =>{
    mottoControls.start({y: -8,
      opacity: 1, display:'block'});
  }

  return (
    <motion.div 
        animate={clicked ? 'open' : 'closed'}
        variants={variants}
        className="text-white w-full h-full flex justify-start items-center overflow-hidden">
        <motion.div 
            variants={titleV}
            animate={clicked ? 'open' : null}
            className="ml-20 text-6xl font-freight leading-12">
            <motion.div
                initial={{ y:100, opacity: 0 }}
                animate={{ y:0, opacity: 1 }} 
                transition={{duration:1, delay: 0.4}}
            >
                Full Stack Developer.
            </motion.div>
            <IntroButton clicked={clicked} onLearnMore={()=> clickReadMore()}/>
        </motion.div>
        <motion.div
            initial={clicked ? {opacity: 1, display:'inline'} : {opacity:0, display:'none'}}
            style={{width: '80%', margin: '0 auto'}}
            className="text-3xl leading-14 flex flex-col xl:max-w-4xl lg:max-w-4xl"
            animate={mottoControls}
            transition={{duration:1, delay: 0.4}}
        >
            <motion.div
                className="text-6xl"
                style={{y: -50, x:-5}}
            >
                Hello.
            </motion.div>
            <span>
                I am a highly autonomous young profession that value and embrace 
                <motion.span 
                    className="p-2 text-center ml-2"
                    style={{backgroundColor: 'black', color: 'white',width:'140px'}}>
                    diversity
                </motion.span>, 
                <motion.span 
                    className="p-2 text-center ml-2"
                    style={{backgroundColor: 'black', color: 'white',width:'140px'}}>
                    teamwork
                </motion.span> and 
                <motion.span 
                    className="p-2 text-center ml-2"
                    style={{backgroundColor: 'black', color: 'white',width:'140px'}}>
                    personal development
                </motion.span>.
            </span>
            <span> My motto is - 'Anything can be achieved with hard work and perseverance.' </span>
        </motion.div>
    </motion.div>
  );
}

export default Home;
