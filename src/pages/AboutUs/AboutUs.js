import React from 'react'
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className='fade-in'>
      <div className="container text-center  p-sm-0 p-4  pb-sm-1 text-white">

        <img className="img-fluid ctd-logo py-5 " src="https://i.postimg.cc/yNMmy6CD/ctdlogo.png" alt="" />


          <div className="content">
            <p><strong> Credenz Tech Dayz </strong>is an intra-college annual techfest organized by the PICT IEEE
              Student Branch where the brightest minds of PICT compete in technical as well as non-technical events.
              Participants get a chance to test their logical aptitute and problem solving skills in events like like
              National Computing Contest and Reverse Coding. Decode Rush is a unique and immersive outdoor quest designed to ignite your sense of adventure. Participants embark on a thrilling scavenger hunt, armed with just two crucial elements: a clue that leads to the next location and a riddle that holds the answer</p>
          </div>
      </div>

      <div className="container text-center mt-lg-5 p-4 mt-sm-0 text-white">

        <h1 className="mb-sm-3 mb-lg-5">ABOUT US</h1>

        <div className="row my-5 py-3 py-sm-1">
          <div className="col d-flex justify-content-center col-12 col-lg-6 mb-sm-5 mb-3">
            <a href='https://www.ieee.org/' target='blank'>
            <img className="img-fluid" src="https://ctd.pictieee.in/static/media/ieee.afc7672e5bd9b388828d.png" alt="" style={{maxWidth : "50%" }} /></a>
          </div>

          <div className="col col-12 col-lg-6 content">
            <h2 className="text-center">Institute of Electrical and Electronics Engineering</h2>
            <p>The Institute of Electrical and Electronics Engineering (IEEE) is an international organization, which has been the nexus for propagating scientific expertise among people all over the globe. IEEE continues to attract students, faculty and professionals from various fields all around the world and is committed to incorporate diversity in thoughts which is essential for scientific development. IEEE currently has Student Branches at thousands of universities and colleges in hundreds of countries throughout the world.</p>
          </div>

        </div>

        <div className="row d-flex flex-row-reverse my-5 py-3">

          <div className="col d-flex justify-content-center col-12 col-lg-6">
            <a href='https://pictieee.in/' target='blank'>
            <img className="img-fluid" src="https://i.postimg.cc/j2sWFrBy/Snapinsta-app-346900783-2321428674713276-5522514512414463607-n-1080.jpg" alt="" style={{maxWidth: "75%", maxHeight: "85%"}} /></a>
          </div>

          <div className="col col-12 col-lg-6 content">
            <h2 className="text-center">PICT IEEE Student Branch (PISB)</h2>
            <p>PISB was established in the year 1998 with the aim of inculcating the sense of technical awareness amongst its student members. PISB endeavers to escalate the knowledge and trends in the diverse field of technologies amongst its members. PISB upholds two major events every year, Credenz and Credenz Tech Dayz with the first one being conducted in the even semester and the second one in the odd semester. PISB is also marked by its Women in Engineering (WIE) chapter, an initiative for impowerment of women in the technical domain. PISB has been awarded the Best Student Branch of IEEE in Pune section.</p>
          </div>



        </div>

        <div className="row my-5 py-3">

          <div className="col d-flex justify-content-center col-12 col-lg-6">
            <a href='https://pictieee.in/ping181' target='blank'>
            <img className="img-fluid" src="https://i.postimg.cc/90D5yCMd/Snapinsta-app-361242103-1885868671793079-6978845724989491072-n-1080-2.jpg" alt="" style={{maxWidth: "70%", maxHeight: "85%"}} /></a>
          </div>

          <div className="col col-12 col-lg-6 content">
            <h2 className="text-center">PICT IEEE NEWSLETTER GROUP (P.I.N.G.)</h2>
            <p>P.I.N.G. (PICT IEEE Newsletter Group) is the official technical magazine of PISB. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. It also features interviews of distinguished personalities in various technical domains.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutUs