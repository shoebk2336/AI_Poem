import './App.css'
import { FooterCentered } from './Mantine_Comp/Footer/Footer'
import {Home} from './pages/Home'
import { Custom_Routes } from './Routes/Routers'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


 


function App() {

  return (
    <>
    <Router>
      <Custom_Routes/>
      <FooterCentered/>
      </Router>
    </>
  )
}

export default App
