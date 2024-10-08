import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div><div className="container-fluid p-0 ">
    <div id="header-carousel" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img style={{height: 600}} className="w-100 h-40" src="./src/images/3.jpg" alt="Image"/>
                
            </div>
            <div className="carousel-item">
                <img style={{height: 600}} className="w-100 h-40" src="./src/images/2.jpg" alt="Image"/>
                    
                </div>
            </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
</div>
  )
}

export default Home