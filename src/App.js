
import './App.css';
import TopBar from './components/NavbarComp';

import Footer from './components/FooterComp';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
