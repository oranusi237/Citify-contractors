import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Pages/Home'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import './App.css';
import SignUpPage from './Components/Pages/Auth/SignUp/SignUp';
import LoginPage from './Components/Pages/Auth/SignIn/Login';
import NavIndex from './Components/NavigationBars';
import PageNotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavIndex />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
