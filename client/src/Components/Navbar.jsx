
import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
    return(
        <>
          <div className="  d-flex bg-success row h-100  ">
            <div className="col-4 ps-5 pt-1">
               {/* <img src="/logo.png"className="w-25 h-50"  alt="" /> */}
               <h1 className="text-white">Agri</h1>
            </div>
            <div className=" d-flex justify-content-end col-8">
                <ul className="d-flex ">
                    <div className="me-5 mt-3">
                        <Link to="/" className="text-decoration-none text-white" >Home</Link>
                    </div><br />
                    <div className="me-5 mt-3">
                        <Link to="/about" className="text-decoration-none text-white">Products</Link>
                    </div><br />
                    <div className="me-5 mt-3">
                        <Link to="/Getpet" className="text-decoration-none text-white">Schemes</Link>
                    </div><br />
                    <div className="me-5 mt-3">
                        <Link to="/Postpet" className="text-decoration-none text-white">login</Link>
                    </div><br />
                   
                </ul>
            </div>
        </div>
    
        </>
    )

}
export default Navbar;