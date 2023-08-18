import React from 'react'
import "./Sponsor.css";

const Sponsor = () => {
  return (
    <div className='fade-in '>
      <div className="container text-center  p-sm-0 p-4  pb-sm-1 text-white">
      <h1 className="sponserheading mb-sm-2 mt-sm-4">OUR SPONSOR</h1>
        <img className="img-fluid img-fluid1 ctd-logo py-2 " src="https://i.postimg.cc/JzNvdSnH/sponserlogo1.png" alt="" />


          <div className="content content1">
            <p className='parasponser'><strong>Chanakya Mandal Pariwar </strong> is One stop-solution for students to enhance their skills and career.
            So here we help them to connect with our experts and share their stories. 
            Our aim is to help college students get access to the best career counseling advice,training followed by mentoring by arranging career events across the country.
           </p>
            {/* <p> a well-known institute that 
            has been helping students prepare for UPSC and MPSC exams for years. Their motto of creating 
            youth with global consciousness and competence and national character is evident in their teaching methods and content.</p> */}
          </div>
      </div>
    </div>
  )
}

export default Sponsor