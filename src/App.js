import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Menu from './menu/Menu';
import { motion, useAnimation } from "framer-motion"
import IntroButton from './home/intro/IntroButton';
import Flag from './home/intro/Flag';

const variants = {
  closed: { backgroundColor: 'black', color: 'white' },
  open: { backgroundColor: 'rgb(245, 236, 66)', color: 'black' },
}

const titleV = {
  closed: {opacity: 1, display:'inline'},
  open: {opacity: 0, display:'none'}
}

const App = () => {
  const [clicked, setClick] = useState(false);
  const mottoControls = useAnimation();
  
  const clickReadMore = () => {
    setClick(!clicked); 
    mottoAnimate();
  }

  const mottoAnimate = () =>{
    mottoControls.start({y: -8,
      opacity: 1});
  }

  return (
    <Router>
      <Menu clicked={clicked}/>
      <Flag clicked={clicked}/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/">
          <motion.div 
            animate={clicked ? 'open' : 'closed'}
            variants={variants}
            className="text-white w-full h-full flex justify-start items-center overflow-hidden">
            <motion.div 
              variants={titleV}
              animate={clicked ? 'open' : null}
              className="ml-20 text-6xl font-freight leading-12">
              <motion.div
                // variants={titleV}
                // animate={clicked ? 'open' : 'closed'}
                initial={{ y:100, opacity: 0 }}
                animate={{ y:0, opacity: 1 }} 
                transition={{duration:1, delay: 0.4}}
              >
                Full Stack Developer.
              </motion.div>
              <IntroButton clicked={clicked} onLearnMore={()=> clickReadMore()}/>
            </motion.div>
            <motion.div
                initial={clicked ? {opacity: 1} : {opacity:0}}
                style={{width: '80%', margin: '0 auto'}}
                className="text-3xl leading-10 flex flex-col"
                animate={mottoControls}
                transition={{duration:1, delay: 0.4}}
                >
                <motion.span>
                  I am a highly autonomous young profession that value and embrace diversity, teamwork and personal development.
                </motion.span>
                <span> My motto is - 'Anything can be achieved with hard work and perseverance.' </span>
            </motion.div>
          </motion.div>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
