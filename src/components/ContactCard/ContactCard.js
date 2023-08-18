import React from "react";
import "./ContactCard.css";

const Contactcard = (props) => {
    return (
        <>
            <div className="col-12 col-md-4 col-sm-6 text-center colu">
                <div className="card singlecard my-3 mb-4 p-2">
                    <img className="rounded-circle p-4 effect1 image" src={props.image} alt="" />
                    <div className="card-body text-white mb-2">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.contactnumber}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactcard