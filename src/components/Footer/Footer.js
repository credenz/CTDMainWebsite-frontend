import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="fixed-bottom p-0 foot fw-light fs-6">
        <div className="text-light ">
          <div className="row">
            <div className=" col-12 col-sm-4 text-center text-sm-start my-1 my-sm-2  px-sm-5">
            <a href='https://pictieee.in/' className='footerText' target='blank'>PICT IEEE STUDENT BRANCH</a>
            </div>

            <div className="col-12 col-sm-4 text-center my-0 my-sm-2">
              <NavLink
                to="/ourteam"
                className="text-decoration-none text-light"
              >
                Developed by : <a href='/ourteam' className='text-light'> Web Team</a>
              </NavLink>
            </div>

            <div className="col-12 col-sm-4 text-center text-sm-end px-sm-5 p-0 mt-sm-2 my-1">

              <a href='https://www.linkedin.com/company/pisbieee' target='blank'><i className="bi-linkedin mx-2 footericom"></i></a>
              <a href='https://www.instagram.com/pictieee' target='blank'><i className="bi-instagram mx-2 footericom"></i></a>
              <a href='https://www.facebook.com/pictieee' target='blank'><i className="bi-facebook mx-2 footericom"></i></a>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer