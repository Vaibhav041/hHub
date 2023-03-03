import React from "react";
import { useLocation } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const JobDetail = () => {
  const location = useLocation();
  return (
    <>
      <nav
        style={{
          height: "150px",
          backgroundImage: "linear-gradient(#33d4d4 , teal)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></nav>
      <div>
        {/* <h1 style={{ textAlign: "center" }}></h1> */}
        <h5 style={{ textAlign: "center" }}>
          {location.state.position}, {location.state.company}
        </h5>
      </div>
      <div className="container" style={{ margin: "10px" }}>
        <p>
          <LocationOnIcon /> {location.state.location}
        </p>
        <p>
          <BusinessCenterIcon /> {location.state.experience}
        </p>
        <div style={{ marginTop: "50px" }}>
          <h5>Job description</h5>
          <p
            dangerouslySetInnerHTML={{ __html: location.state.description }}
          ></p>
        </div>
      </div>

      <form  style={{width:"600px", margin:"30px"}}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default JobDetail;
