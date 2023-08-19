import React, { useState } from "react";
import "./register.css";
import axiosInstance from "../../utils/apis";
import { useNavigate } from "react-router";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import {toast} from 'react-toastify';
import { NavLink } from "react-router-dom";
const Register = () => {
  const { loginState, setLoginState } = useContext(DataContext);
  if(loginState){};
  // const [isJunior,setIsJunior] = useState(false);
  const defaultDetails = {
    first_name: "",
    last_name: "",
    Username: "",
    email: "",
    reg_id: "",
    password: "",
    isJunior: "false",
  };



  const [userDetails, setUserDetails] = useState(defaultDetails);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    setUserDetails({ ...userDetails, [name]: value.trim() });

    if (name === 'isJunior') {
      setUserDetails({ ...userDetails, [name]: checked });
    }
    // e.tagrget==='isJunior'?
    // if(e.target.type=='checkbox') {

    //     setUserDetails({ ...userDetails, [name]: checked });

    // }
    // else{
    //     setUserDetails({ ...userDetails, [name]: value });
    // }

    // if('value' in e.target) {
    // this.setState({ [event.target.name]: event.target.value});

    // }

    // e.target.checked?setIsJunior(true):setIsJunior(false);

    // console.log(e.target.checked);

  };

  const navigate = useNavigate();

  const registerUser = (details) => {
    const registerEndpoint = "/api/register";
    const id = toast.loading("Please wait...");
    setTimeout(() => {

    axiosInstance
      .post(registerEndpoint, details)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userEmail", response.data.email);
          toast.update(id, { render: "Registered  successfully !", type: "success", isLoading: false, autoClose:3000 })
          setLoginState(true);
          navigate("/");
        } else {
          alert("Registration failed");
          setUserDetails(defaultDetails);
        }
      })
      .catch((error) => {
        toast.update(id, { render: error.response.data.error, type: "error", isLoading: false, autoClose:3000 })
      });
    }, 1000)
  };

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(userDetails);
    registerUser(userDetails);
  };

  // const handleCategoryChange = (e) =>{
  //   if(e.target.name == "junior"){
  //     setUserDetails({...userDetails, ["isJunior"]:true});
  //   }
  //   else{
  //     setUserDetails({...userDetails, ["isJunior"] : false})
  //   }
  // }

  return (
    <div className="fade-in regPg">
      <div className="mt-0">
        <div className="container cont12 text-white p-3 p-sm- px-sm-4 mt-sm-0 log-style">
          <form onSubmit={submitDetails}>
            <div className="title mb-sm-2 mb-3 text-center">
              <h1>Sign up &#xF4DD;</h1>
              <small className="d-none">
                Will be delightful to have you on board.
              </small>
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style-register"
                placeholder="&#xF4C8;  First Name"
                name="first_name"
                value={userDetails.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style-register"
                placeholder="&#xF4C8;  Last Name"
                name="last_name"
                value={userDetails.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style-register"
                placeholder="&#xF4DA;  Username"
                name="Username"
                value={userDetails.Username}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-1">
              <input
                type="email"
                className="form-control form-control-lg fs-6 input-style-register"
                placeholder="&#xF32C;  Email address"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style-register"
                placeholder="&#xF4CF;  Reg. Id"
                name="reg_id"
                value={userDetails.reg_id}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-2">
              <input
                type="password"
                className="form-control form-control-lg fs-6 input-style-register"
                placeholder="&#xF44E;  Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                checked
              />
            </div>

            {/* <div className="form-check"> 
              <label>Category : </label>
              <div class="form-check mx-5 ms-5">
                <input class="form-check-input" type="radio" id="flexRadioDefault1" name="isJunior" onClick={handleChange}/>
                <label class="form-check-label" htmlFor="flexRadioDefault1">
                  Junior
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="radio" name="isJunior" id="flexRadioDefault2"  onClick={handleChange}/>
                <label class="form-check-label" htmlFor="flexRadioDefault2">
                  Senior
                </label>
              </div>

            </div> */}

            <div className="input-group mb-1">
              <small>
                <div class="form-check ms-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="isJunior"
                    value="false"
                    id="flexCheckDefault"
                    onClick={handleChange}
                  />
                  <label class="form-check-label" htmlFor="flexCheckDefault">
                    Junior
                  </label>
                </div>
              </small>
              <button className="btn btn-lg w-100 rounded-2 fs-6 btn12">
                Register &#xF4DD;
              </button>
            </div>
            <div className="row forgot">
              <small className="d-flex">
                <span>
                Already a user?{" "}
                </span>
                <span>
                <NavLink
                  to="/login"
                  className="text-decoration-none"
                >
                  <span href="#" className="text-light forgot-signup hover-link mx-2">
                    {" "}Sign In
                  </span>
                </NavLink>
                </span>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
