import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="container1 z-0" >
        <div className="sky">
          <div className="text">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="shooting-stars"></div>
            <div className="text-center logobox fade-in d-flex flex-column">
            {/* <img alt="" src="https://i.postimg.cc/JzNvdSnH/sponserlogo1.png" className="logoImg1" /> */}
            {/* <span className='text-light presents'>Presents</span> */}
              <img alt="" src="https://i.postimg.cc/yNMmy6CD/ctdlogo.png" className="logoImg" />
            </div>
          </div>
          
        </div>
      </div>
      {/* <div className="text-center logobox">
      <img src="https://i.postimg.cc/yNMmy6CD/ctdlogo.png" className="logoImg" />
    </div> */}
    </>
  )
}

export default Home