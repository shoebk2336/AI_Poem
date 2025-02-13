import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login_logout } from "../pages/Login"
import { Collection } from "../pages/Collection"
import { Admin } from "../pages/Admin"


export const Custom_Routes=()=>{
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login_logout />} />
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
    )
}