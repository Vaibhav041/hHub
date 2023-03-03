import React from "react";
import image from '../img4.jpg'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

const Job = (props) => {
  const navigate = useNavigate();
    const handleClick = () => {
      navigate('/detail', {state:{position:props.position, company:props.company, experience:props.experience, location:props.location, link:props.link, description:props.desc}});

    }
  return (
    <div class="card jobCard shadow-lg" onClick={handleClick}>
      <img src={image} className="rounded" width="100px" height="80px" alt="..."/>
      <div className="position">
        <h3>{props.position}</h3>
        <p>{props.company}</p>
      </div>
      <div>
        <p>
          <BusinessCenterIcon /> {props.experience}
        </p>
        <p>
          <LocationOnIcon /> {props.location}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Job;
