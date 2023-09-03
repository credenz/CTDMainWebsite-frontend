import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Events from "./pages/Events/Events";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OurTeam from "./pages/OurTeam/OurTeam";
import ResetPassword from "./pages/Reset Password/ResetPassword";
import DataContext from "./contexts/DataContext";
// import Sponsor from "./pages/Sponsors/Sponsor";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

// import axiosInstance from "./utils/apis";

function App() {
  const [loginState, setLoginState] = useState(localStorage.getItem("isLogin"));
  return (
    <div>
      <DataContext.Provider value={{loginState, setLoginState}}>
        <div>
          <Navbar />
        </div>

        <ToastContainer theme="dark" className="mt-5"/>
        
        <div  className="mostly-customized-scrollbar">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/ourteam" element={<OurTeam />} />
            <Route exact path="/resetpassword/:token" element={<ResetPassword />} />
            {/* <Route exact path="/sponsor" element={<Sponsor/>} /> */}
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
