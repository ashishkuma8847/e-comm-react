import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Common/Header'
import Home from './pages/Home'
import Belt from './pages/Belt'
import Bags from './pages/Bags'
import Sneakers from './pages/Sneakers'
import Contect from './pages/Contect'
import Footer from './component/Common/Footer'
import PageNotFound from './component/error/PageNotFound'
import ScrollToTop from './component/Common/ScrollToTop.JSX'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <ScrollToTop/>
     <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Bags' element={<Bags/>}/>
   <Route path='/Sneakers' element={<Sneakers/>}/>
   <Route path='/Belt' element={<Belt/>}/>
   <Route path='/Contect' element={<Contect/>}/>
   <Route path='/error' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
