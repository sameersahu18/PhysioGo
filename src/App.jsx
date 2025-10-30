import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import BookYourPhysio from './Pages/BookYourPhysio.jsx'
import FindAPhysio from './Pages/FindAPhysio.jsx'
import AiMatcher from './Pages/AiMatcher.jsx'


import { Routes, Route } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen flex flex-col">
       <Navbar />
       <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookYourPhysio />} />
          <Route path="/AiMatcher" element={<AiMatcher />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FindAPhysio" element={<FindAPhysio />} />
        </Routes>
      </div>

      </div>
      
      
      

      
    
    </>
  )
}

export default App
