import React from 'react'
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <div>
        <div className='banner d-flex flex-column justify-content-center align-items-center'>
          <h1>YUMMY</h1>
          <h3 className='text-center'>Taste the world with our recipes <br /> where every dish tells a story.</h3>
          <button onClick={handleNavigate} className="btn btn-success">
              Get Started
            </button>
        </div>
      </div>
    </>
  )
}

export default LandingPage