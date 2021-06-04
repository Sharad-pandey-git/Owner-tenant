import React from "react"

export function M_SubHome() {
  return (
    <div className="my-4 ">
      {/* Head of the Mobile Home Page */}

      <div className="row">

        <div className="row">
          <div className="col-5">
            <h4 className="ms-3">
              Verify BGV
          </h4>
          </div>
          <div className="col-7">
            <h6 className="pt-1"><span style={{ color: "grey" }}>Welcome Back !</span> Yeshwanth</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-5"></div>
          <div className="col-7">
            <div className="d-flex">
              <div className="d-flex bg-white profileCard my-2">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""
                  width="40px" height="40px"
                />
                <p className="mAuto pe-3"><a href="" className="text-dark proA">Logout</a></p>
                <a href="" className="text-dark mAuto"><i class="far fa-bell"></i></a>
                <a href="" className="text-dark mAuto"><i class="fas fa-ellipsis-h"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Side Body Of Home Page */}

      <div className="container mt-4">
        <div className="container card py-4 boxShadow ">

          {/* Profile Card and details */}
          <div className="card-img-top d-flex flex-column ">

            <div className="row">
              <div className="card justify-content-center d-flex flex-row align-items-end ms-3 mb-4"
                style={{
                  width: "80px",
                  height: "80px",
                  boxShadow: "0.5px 0.5px 2px 2px #bfbfbf"
                }}
              >
                <h1><i className="fas fa-user-alt"></i> </h1>
              </div>

              <div className="col text-start">
                <h6 className="text-sm-start">Yeshwanth Vepachadu / TNT345234</h6>
              </div>

            </div>

            <div>
              <div className="col text-start">
                <div className="row">
                  <h6 className="mt-2">
                    <span className="text-danger me-4 cates">Mobile Number:</span>
                    9889878634
                  </h6>
                </div>
              </div>

              <div className="col text-center">
                <div className="row">
                  <div className="row text-start">
                    <h6>
                      <span className="text-danger me-4 cates">Email :</span>
                     example@mail.com
                  </h6>
                  </div>
                  <div className="row text-start">
                    <h6>
                      <span className="text-danger me-4 cates">Status :</span>
                    Approved
                  </h6>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* BGV Body */}
          <div className="card-body mt-5"
            style={{
              border: "0.5px solid #bfbfbf"
            }}
          >
            <h6>BGV Document :</h6>
            <div className="container d-felx flex-column">

              <div className="row mx-auto my-3 ">
                <div className="row mx-auto">
                  <div className="text-center">

                    <div className="card pt-2 cardMd ">
                      <h1 className="card-img">
                        <a href="">
                          <i className="fas fa-file-upload"></i>
                        </a>
                      </h1>
                      <p className="card-body py-0 text-danger">
                        Add BGV Document
                      </p>
                    </div>

                  </div>
                </div>
                <div className="row commentAr my-5 mx-auto">
                  <div className="commentTxt">Comments</div>
                  <textarea name="" id="" cols="60" rows="3"
                    placeholder="Comments (Optional)"
                    className="container my-3"></textarea>
                </div>
              </div>

              <div className="">
                <h6 className="">Tenant Documents :</h6>
                <div className="d-flex flex-column justify-content-center px-4">

                  <div className="card text-center my-2 cardSm">
                    <h1 className="card-img">
                      1
                      </h1>
                    <p className="card-body py-0 text-danger">
                      Uploaded
                      </p>
                  </div>
                  <div className="card text-center my-2 cardSm">
                    <h1 className="card-img">
                      2
                      </h1>
                    <p className="card-body py-0 text-danger">
                      Uploaded
                      </p>
                  </div>
                  <div className="card text-center my-2 cardSm">
                    <h1 className="card-img">
                      3
                      </h1>
                    <p className="card-body py-0 text-danger">
                      Uploaded
                      </p>
                  </div>

                  <div className="card pt-2 my-2  cardSm text-center">
                    <h1 className="card-img">
                      <a href="">
                        <i className="fas fa-file-upload"></i>
                      </a>
                    </h1>
                    <p className="card-body py-0 text-danger">
                      Add More
                      </p>
                  </div>

                </div>
              </div>

              <div className="d-flex mt-4">
                <button className="btn btn-danger me-1">APPROVED</button>
                <button className="btn btn-outline-danger">REJECTED</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}