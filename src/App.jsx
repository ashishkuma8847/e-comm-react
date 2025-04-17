import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './component/Common/ScrollToTop';
import Home from './pages/Home';
import Bags from './pages/Bags';
import Sneakers from './pages/Sneakers';
import Belt from './pages/Belt';
import Contect from './pages/Contect';
import Hotdeal from './Hordeal/Hotdeal';
import Header from './component/Common/Header';
import Footer from './component/Common/Footer';
import PageNotFound from './component/error/PageNotFound';
import './App.css'


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Home />} />
        <Route path='/Bags' element={<Bags />} />
        <Route path='/Sneakers' element={<Sneakers />} />
        <Route path='/Belt' element={<Belt />} />
        <Route path='/Contect' element={<Contect />} />
        <Route path='/error' element={<PageNotFound />} />
        <Route path='/Hotdeal' element={<Hotdeal />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : */}
      <Router>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        {/* <Footer /> */}
      </Router>
      {/* } */}

    </>
  );
};

export default App;
