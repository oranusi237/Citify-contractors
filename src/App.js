import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Pages/Home'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import './App.css';
import SignUpPage from './Components/Pages/Auth/SignUp/SignUp';
import LoginPage from './Components/Pages/Auth/SignIn/Login';
import NavIndex from './Components/NavigationBars';
import PageNotFound from "./Components/Pages/NotFound";
import Footer from "./Components/Reuseables/Sections/Footer";
import RequireAuth from "./Components/Utils/RequireAuth";
import CheckoutPage from "./Components/Pages/Checkout/Checkout";
import PricingPage from "./Components/Pages/Pricing/Pricing";
import ProfilePage from "./Components/Pages/Profile/Profile";
import { useEffect } from "react";
import { setCurrentUser, setIsAuthenticated } from "./Components/Store/user/user-slice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/Utils/Firebase/Firebase";
import ProtectedRoute from "./Components/Pages/Auth/ProtectedRoute";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(setCurrentUser(firebaseUser));
        setIsAuthenticated(true);
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
    });

    // Unsubscribe from the auth state listener when component unmounts
    return () => unsubscribe();
  },);


  return (
    <BrowserRouter>
      <NavIndex />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<RequireAuth childComponent={<ProfilePage />} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/checkout" element={<RequireAuth childComponent={<CheckoutPage />} />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
