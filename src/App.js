import Home from './pages/Home'
import Navbar from './pages/Navbar'
// import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Contact from './pages/Contact.js'
import './App.css'
// import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
        <div className="app">
          <div className="main">
            <Home />
            {/* <Skills /> */}
            <Projects />
            <Contact />
          </div>
        </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
