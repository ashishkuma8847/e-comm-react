import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Common/Header'
import Home from './pages/Home'
import Belt from './pages/Belt'
import Bags from './pages/Bags'
import Sneakers from './pages/Sneakers'
import Contect from './pages/Contect'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Bags' element={<Bags/>}/>
   <Route path='/Sneakers' element={<Sneakers/>}/>
   <Route path='/Belt' element={<Belt/>}/>
   <Route path='/Contect' element={<Contect/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
