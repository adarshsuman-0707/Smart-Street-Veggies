import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "animate.css"
// import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import MapDisplay from "./maps/MapDisplay";
import Veggieform from "./veggies/Veggieform";
import Allveggie from "./veggies/Allveggie";
import VerifyEmail from "./pages/VerifyEmail"
import ForgotPassword from "./components/ForgotPassword";
import NotFoundPage from "./components/PageNotFound";
import ResetPassword from "./components/ResetPassword";
// import ResetPassword from "./components/resetPassword";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      {/* <MapDisplay/> */}
      {/* <Veggieform/> */}
      {/* <Allveggie/> */}



      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/forgot" element = {<ForgotPassword/>} />
   <Route path='/resetPassword' element ={<ResetPassword/>}/>
   
        <Route path="/verify-email" element={ <VerifyEmail/>} />
        <Route path="/addVeggie" element={ <Allveggie/>} />
        <Route path="/map-display" element={ <MapDisplay/>} />
     

        <Route path="*" element={<NotFoundPage />} />
     
      </Routes>

    </div>
    )
}

export default App;
