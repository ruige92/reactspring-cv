import React, {useState} from 'react';
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
import Home from './home/Home';
import Flag from './home/intro/Flag';

const App = () => {
  const [clicked, setClick] = useState(false);

  return (
    <Router>
      <Menu clicked={clicked}/>
      <Flag clicked={clicked}/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/">
          <Home clicked={clicked} clickedReadMore={()=> setClick(true)}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
