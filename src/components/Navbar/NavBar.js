import React, { useContext} from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../utils/apis"
import DataContext from "../../contexts/DataContext";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
const NavBar = () => {

  const {loginState, setLoginState} = useContext(DataContext)
  const navigate = useNavigate();
  const userLogout = () => {
    const id = toast.loading("Please wait...");
    const userEmail = localStorage.getItem("userEmail")
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isDatawiz");
    localStorage.removeItem("isNCC");
    localStorage.removeItem("isRC");

    const logoutEndpoint = "/api/logout/"
    const logoutPayload = {"email" : userEmail}

    setTimeout(()=>{
      axiosInstance.get(logoutEndpoint, logoutPayload)
      .then((resposne)=>{  
        toast.update(id, { render: "Logged out successfully !", type: "success", isLoading: false, autoClose:1000 })
        setLoginState(false)
        navigate("/login");
      })
      .catch((error)=>{
        toast.update(id, { render: "Error occured", type: "error", isLoading: false, autoClose:3000 })
      })},0)
    
  }
  const handleLogout = (e) =>{
    userLogout();
  }

  const hidingcss = "d-none";
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navb navbar-dark text-light p-sm-2 p-2 z-3 navbar1">
        <div className="container-fluid">
            <a href="https://pictieee.in/" target="blank"><img
              src="https://i.postimg.cc/rFvmtXSY/pisb.png"
              alt=""
              className="img-style"
            /></a>
            
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-light mx-2">
                
                <NavLink
                  to="/"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/events"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Events
                </NavLink>
              </li>

              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/aboutus"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/contactus"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/sponsor"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Sponsor
                </NavLink>
              </li>
              <li className={`nav-item text-light mx-2 ${loginState ? hidingcss : ""}`}>
                <NavLink
                  to="/login"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Login
                </NavLink>
              </li>

              <li className={`nav-item text-light mx-2 ${!loginState ? hidingcss : ""}`}
              onClick={handleLogout}>
                <NavLink
                  to="/login"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
