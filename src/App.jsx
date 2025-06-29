import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Loader from "./Components/Loader"; 
import Login from "./Components/Login";

const App = () => {
  const [loading, setLoading] = useState(true); //  Loader state

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // 2 sec baad loader hata do
    }, 1000);
  }, []);

  return (
    <>
      {loading ? ( 
        <Loader />  // Loader dikhao
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
