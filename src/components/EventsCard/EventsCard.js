import React from 'react'
import "./EventsCard.css"
import axiosInstance from '../../utils/apis'
import { useNavigate } from 'react-router'
import Rule from '../Rule/Rule'
import {toast} from 'react-toastify';
// import { useState } from 'react'
const EventsCard = (props) => {

  const navigate = useNavigate();

  const registerEvent = (e) => {

    const id = toast.loading("Please wait...");
    const eventName = e.target.name;
    const email = localStorage.getItem("userEmail")
    const userEmail = {
      "email1": email,
    }

    const eventEndpoint = `api/register/indi/${eventName}/`

    axiosInstance.post(eventEndpoint, userEmail)
      .then((response) => {
        if (response.data.success) {
          // alert(response.data.message)
          toast.update(id, { render: response.data.message, type: "success", isLoading: false, autoClose:3000 })
        }
        else {
          toast.update(id, { render: response.data.message, type: "error", isLoading: false, autoClose:3000 })
        }
      })
      .catch((error) => {
        toast.update(id, { render: error.response.data.error, type: "error", isLoading: false, autoClose:3000 })
        if (error.response.status === 401) {
          navigate("/login")
        }
        else if (error.response.status === 500) {
          navigate("/events")
        }
      })

  }

  const obj = props.rules.split("\n");
  
  const contact1 = props.contact.split("\n")
  let btncontent = "Register Here";
  if(props.shortname==="NTH"){
    btncontent = "Coming soon";
  }

  const checkCondition = () => {
    // Example condition: disable the button when a count is greater than 5
    return props.shortname==="NTH";
  };
  let inlineStyles={}
  
  if(props.shortname === "RC" && window.innerWidth<768)
  {
    inlineStyles = {
      
        marginBottom: '20vh', // Adjust styles for phone screens
      
    }
  }


  return (
    <>
      <div className="modal fade eventModal" id={`${props.shortname}`} tabIndex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog1" role="document">
          <div className="modal-content modal-content1 text-light">
            <div className="modal-header modal-header1 mb-0">
              <h4 className='ms-0 modaltitle'>{props.eventName}</h4>
              <span className="close bg-none dark text-white" data-bs-dismiss="modal"
                aria-label="Close"><span aria-hidden="true" className="closebtn" >&#xF659;</span></span>
            </div>
            <div className="modal-body modal-body1  d-flex">
              <div className="eventCardNav nav flex-sm-column flex-row justify-content-between nav-pills m-0"
                id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="mbtn active" id="v-pils-home-tab" data-bs-toggle="pill"
                  href={`#v-pills-home-${props.shortname}`} role="tab" aria-controls="v-pills-home"
                  aria-selected="true">Details</a>
                <a className=" mbtn" id="v-pills-profile-tab" data-bs-toggle="pill"
                  href={`#v-pills-profile-${props.shortname}`} role="tab"
                  aria-controls="v-pills-profile" aria-selected="false">Rules</a>
                <a className=" mbtn" id="v-pills-messages-tab" data-bs-toggle="pill"
                  href={`#v-pills-message-${props.shortname}`} role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false">Contact</a>
              </div>
              <div className="tab-content m-0 ms-3" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id={`v-pills-home-${props.shortname}`}
                  role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <p id="dtext">{props.details}</p>
                  <span>Timing : </span>
                  <p className='timing'>{props.timings}</p>
                </div>
                <div className="tab-pane fade" id={`v-pills-profile-${props.shortname}`} role="tabpanel"
                  aria-labelledby="v-pills-profile-tab">
                  <p id="Rules">
                    {
                      obj.map((rule, index) => {
                        return  <Rule key ={index} rule={rule} />
                      })
                    }
                  </p>
                </div>
                <div className="tab-pane fade contactSection" id={`v-pills-message-${props.shortname}`}
                  role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <p id="Save" className='ms-4'>{contact1[1]}</p>
                  <p id="Save" className='ms-4'>{contact1[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`card card12`} style={inlineStyles}>
        <img className="m-auto img-fluid img-fluid12 p-2 fade-in" src={props.imageUrl} alt="NTH logo" />
        <div className="card-body card-body12">
          <h5 className="card-title fs-2 text-center">{props.shortname}</h5>
          <div className="btnc">
            <button className="btn detail" data-bs-toggle="modal"
              data-bs-target={`#${props.shortname}`}>Details</button>
            <button className="btn reg" name={props.shortname} onClick={registerEvent} disabled={checkCondition()}>{btncontent}</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default EventsCard

// "https://i.postimg.cc/SKQq1t7X/datawiz.png"

