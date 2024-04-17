import { BrowserRouter, Router, Route } from "react-router-dom"
import Home from './Components/Pages/Home'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Router>
                <Route path="/" element= {<Home />}/>
                <Route path="/about" element= {<About />}/>
                <Route path="/contact" element= {<Contact />}/>
                <Route path="" />
                <Route path="" />
            </Router>
            </BrowserRouter>
  );
}

export default App;
