import React from "react"

export function SubHome() {
  // const { height, width } = useWindowDimensions();
  const width = window.innerWidth
  let wdT
  wdT = width<786 && width>541 ? "col text-center ms-3 mt-3": "col text-center" 

  return (
    <div className="my-4">
      {/* Head of the Home Page */}
      <div className="container d-flex justify-content-between">

        <h4 className="pt-4">
          Verify BGV
        </h4>

        <div className="d-flex">

          <h6 className="pt-5 mx-3"><span style={{ color: "grey" }}>Welcome Back !</span> Yeshwanth</h6>

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

      {/* Side Body Of Home Page */}

      <div className="container mt-4">
        <div className="container card py-4 boxShadow">

          <div className="card-img-top row">

            <div className="card col-2 justify-content-center d-flex flex-row align-items-end mx-4"
              style={{
                width: "80px",
                height: "80px",
                boxShadow: "0.5px 0.5px 2px 2px #bfbfbf"
              }}
            >
              <h1><i className="fas fa-user-alt"></i> </h1>
            </div>
            <div className="col text-start">
              <div className="row">
                <div className="row">
                  <h6 className="text-sm-start">Yeshwanth Vepachadu / TNT345234</h6>
                </div>
                <div className="row">
                  <h6 className="mt-2">
                    <span className="text-danger me-4 cates">Mobile Number:</span>
                    9889878634
                  </h6>
                </div>
              </div>
            </div>

            <div className= {wdT}>
              <div className="row">
                <div className="row text-start">
                  <h6>
                    <span className="text-danger me-4 cates">Email :</span>
                     example@mail.com
                  </h6>
                </div>
                <div className="row text-start">
                  <h6 className="mt-2">
                    <span className="text-danger me-4 cates">Status :</span>
                    Approved
                  </h6>
                </div>
              </div>
            </div>

          </div>

          <div className="card-body mt-5"
            style={{
              border: "0.5px solid #bfbfbf"
            }}
          >
            <div className="container d-felx flex-row">
              <h6>BGV Document :</h6>

              <div className="row my-3">
                <div className="col-4">
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
                <div className="col-6 commentAr">
                  <div className="commentTxt">Comments</div>
                  <textarea name="" id="" cols="60" rows="3"
                    placeholder="Comments (Optional)"
                    className="container my-auto"></textarea>
                </div>
              </div>

              <div className="">
                <h6 className="mb-4">Tenant Documents :</h6>
                <div className="d-flex justify-content-between ps-3 pe-5">

                  <div className="card text-center pt-2 me-2 cardSm">
                    <h1 className="card-img">
                      1
                      </h1>
                    <p className="card-body py-0 text-danger">
                      Uploaded
                      </p>
                  </div>
                  <div className="card text-center pt-2 me-2  cardSm">
                    <h1 className="card-img">
                      2
                      </h1>
                    <p className="card-body py-0 text-danger">
                      Uploaded
                      </p>
                  </div>
                  <div className="card text-center pt-2 me-2 m cardSm">
                    <h1 className="card-img">
                      3
                      </h1>
                    <p className="card-body py-0 text-danger">
                      Uploaded
                      </p>
                  </div>

                  <div className="card pt-2  cardSm text-center">
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

              <div className="d-flex justify-content-end mt-4">
                <div>
                  <button className="btn btn-danger mx-2">APPROVED</button>
                  <button className="btn btn-outline-danger mx-2">REJECTED</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}