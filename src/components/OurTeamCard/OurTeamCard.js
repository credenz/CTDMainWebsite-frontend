import React from "react";
import "./OurTeamCard.css";
const OurTeamCard = (props) => {
  return (
    <div className="card-container col mb-5">
      <div
        className="effect card-style"
      >
        <div className="p-4">
          <img
            className="card-img-top fade-in img-style image"
            src={props.image}
            alt="#"
            
          />
        </div>
        <div className="card-body text-white text-center">
          <h5 className="card-title text-white text-center">{props.name}</h5>
          <p className="card-title text-white text-center">{props.post}</p>
        </div>
        <div className="text-white text-center mb-3">
          <i className="bi bi-linkedin mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
