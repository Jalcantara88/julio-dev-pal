import {
  Nav,
  NavLink,


} from 'reactstrap';
import './App.css';
import TopBar from './components/NavbarComp';
import Intro from './components/Introcomp';
import Footer from './components/FooterComp';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Intro/>
      <main>
        <h4>
          Projects
        </h4>
        <article>
          <img alt="project img"/>
          <header className="projectTitle">
            Project Name
          </header>
          <span className="projectSub">subtitile</span>
          <p>
            about project
          </p>
          <button>link</button>
        </article>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
