import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Experiences from './components/Experiences'
import Home from './components/Home'
import Navbar from './components/Navbar'
import HomeScrn from './screens/HomeScrn'

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomeScrn/>} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
