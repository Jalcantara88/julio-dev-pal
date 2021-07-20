
import './App.css';
import TopBar from './components/NavbarComp';

import Footer from './components/FooterComp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState} from 'react';



function App() {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <Router>
      <div className="App">
        <TopBar setProject={setSelectedProject}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/project">
            <Project project={selectedProject}/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
