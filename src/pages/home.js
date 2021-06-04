import React from "react"
import { SubHome } from "../components/subHome"

function Home() {
  return (
    <div className="home"
      style={{
        overflowX:"hidden"
      }}
    >
      <div className="row ">
        <div className="col-2 ">
          <div className="row">
            <div className="container mt-2 mb-0 text-center">
              <div className="row text-white">
                <h4>
                  <i class="fas fa-home"></i> OWNER
                </h4>
              </div>
              <div className="row my-0">
                <h4 > & TENANT
              </h4>
              </div>

              <p style={{
                fontSize: "8px",
                fontWeight: "bold"
              }}>PROPERTY MANAGEMENT SERVICE</p>

            </div>
          </div>

          <div className="container py-4">
            <div className="row">
              <a href="" className="text-white my-2">
                <i className="fas fa-house-damage mx-2"></i>
                Dashboard
            </a>
              <a href="" className="text-white my-2">
                <i className="far fa-comment-alt  mx-2"></i>
                BGV
            </a>
              <a href="" className="text-white my-2">
                <i className="far fa-comment-alt mx-2"></i>
                Moderator
            </a>
            </div>
          </div>

        </div>

        <div className="col-10 subHome"
          style={{
            borderRadius: "30px",
            minHeight: "100vh"
          }}
        >
          {SubHome()}
        </div>

      </div>

    </div>
  )
}

export default Home;