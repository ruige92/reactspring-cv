import React, {useState, useRef} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import img from './gl/profile2.JPG';
import Label from "./label/Label";
import Scroll from "./scroll/Scroll";
import Test4 from "./gl/test/Test4";
import Test3 from "./gl/test/Test3";
import Logo from "./logo/Logo";
import Intro from "./intro/Intro";
import Translate from "./translate/Translate";
import { motion, useAnimation, AnimatePresence, useCycle } from "framer-motion"
const App = () => {
  const [index, setIndex] = useState(1);
  
  const scroll= () => {
    setIndex(index + 1);
    console.log(index);
  }

  const scrollFromWheel = (event) => {
    if (event.nativeEvent.wheelDelta > 0) {
      console.log('scroll up');
      if(index > 1) {
        setIndex(index - 1);
      }
    } else {
      console.log('scroll down');
      if(index < 6) {
        setIndex(index + 1);
      }
    }
  }

  const Index1 = ({index}) => (
    <>
      {index===1 && (<motion.div
        initial={{y: 0, scale: 1, opacity: 0}}
        animate={{y: 0, scale: 1, opacity: 1}}
        exit={{scale: 1.5, opacity: 0}}
        className="absolute z-10 flex justify-center items-center w-full h-full"
        >
        <Intro />
        <Label prefix={"I"} wordsToDisplay={[
            'am a full-stack developer',
            'have a thirst for knowledge',
            `'m always up for new things`,
            'take pride in multiculturalism',
            'aim to make a positive impact',
        ]}/>
      </motion.div>)}
    </>
  )

  const Index2 = ({index})=> (
    <>
      <motion.div
      initial={{y: '800px'}}
      animate={{y: 0, transition:{duration: 1}}}
      exit={{y:'-800px'}}
      className="absolute z-30 flex justify-center items-center w-full h-full pointer-events-none">
      <div className="text-white text-4xl font-tg_o" style={{width:'390px'}}>
        <motion.div
          initial={{x:-10, opacity:0}}
          animate={{x:0, opacity:1, transition: {delay: 1}}}
          className="text-white text-6xl"
          >
          WHO
        </motion.div>
        <motion.div
          initial={{y:10, opacity:0}}
          animate={{y:0, opacity:1, transition: {delay: 1.2}}}
          className="text-white text-lg">
            I am a highly autonomous young profession that value and embrace diversity, teamwork and personal development. My motto is - 'Anything can be achieved with hard work and perseverance.' 
        </motion.div>
        {/* <motion.img
          src={img}
        /> */}
      </div>
      <Label prefix={"I Love "} wordsToDisplay={[
            ' Video Games',
            ' Horror Movies',
            ' Technologies',
            ' Good Conversations',
            ' Challenges',
        ]}/>
    </motion.div>
    </>
  )

  return (
    <Router>
      {/* <Menu clicked={clicked}/> */}
      {/* <Flag clicked={clicked}/> */}
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/">
          <div onWheel = {(event) => scrollFromWheel(event)}>
          <Index1 page={"home"} index={index}/>
          {index === 2 && <><Index2 index={index}/><Test3 /></>}
          <Scroll index={index} onScroll={()=>{
            scroll();
          }}/>
          <motion.div
            className="w-full h-full text-white absolute" 
            initial={{background:'radial-gradient(at 50% 60%, #1c1c1c 0%, #1c1c1c 100%)'}}
            animate={{background:`radial-gradient(at 50% 60%, #212121 0%, ${index === 0 ? '#111' : '#000'} 100%)`}}
            transition={{duration:0.8, delay: 1}}
            >
          </motion.div>
          {index > 1 ? <><Logo /></> : null}
          
          <Test4 />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
