import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Artist from './pages/Artist.jsx'
import Contact from './pages/Contact.jsx'
import ChanDn from './pages/ChanDn.jsx'
import Cs from './pages/Cs.jsx'
import Kk from './pages/Kk.jsx'
import Kt from './pages/Kt.jsx'
import Ov from './pages/Ov.jsx'
import Ocv from './pages/Ocv.jsx'
import Pr from './pages/Pr.jsx'
import Rs from './pages/Rs.jsx'
import MainAb from './components/MainAb.jsx'
import MainA from './components/MainA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/artist" element={<Artist/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route  path="/cdn" element={<ChanDn/>}/>
      
      <Route path="/" element={<MainA/>} />
      <Route path="/cs" element={<Cs/>} />
      <Route path="/kk" element={<Kk/>} />
      <Route path="/kt" element={<Kt/>}/>
      <Route path="/ov" element={<Ov/>} />
      <Route path="/ocv" element={<Ocv/>}/>
      <Route path="/pr" element={<Pr/>} />
      <Route path="/rs" element={<Rs/>} />


    </Route>
    <Route path='/*' element={<h1>Not Found</h1>} />
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
