import React from "react"
import { M_SubHome } from "../components/M_SubHome"

function M_Home() {
  return (
    <div className="home"
      style={{
        maxWidth:"",
        overflowX:"hidden"
      }}
    >
      <div className="row">

        <nav className="navbar navbar-default d-flex flex-row">

          <div className="nav-item ms-3 mb-5 dropdown">
            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
            >
              <i className="fas fa-bars"
              style={{
                fontSize:"xx-large"
              }}
              ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown"
              style={{
                background: "#ff4d4d"
              }}
            >
              <li>
                <a href="" className="text-white my-2">
                  <i className="fas fa-house-damage mx-2"></i>
                    Dashboard
                  </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a href="" className="text-white my-2">
                  <i className="far fa-comment-alt  mx-2"></i>
                    BGV
                  </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a href="" className="text-white my-2">
                  <i className="far fa-comment-alt mx-2"></i>
                    Moderator
                  </a>
              </li>

            </ul>
          </div>

          <div className="navbar-brand my-0 py-0 text-center">
            <div className="row-sm  text-white">
              <h4>
                <i class="fas fa-home"></i> OWNER
                </h4>
              <h4 className="text-dark"> & TENANT
              </h4>
            </div>
            <p style={{
              fontSize: "8px",
              fontWeight: "bold"
            }}>PROPERTY MANAGEMENT SERVICE</p>
          </div>

        </nav>

        <div className="subHome"
        >
          {M_SubHome()}
        </div>

      </div>

    </div >
  )
}

export default M_Home;