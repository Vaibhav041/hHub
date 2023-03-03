import React, {useState, useEffect} from "react";
import './explore.css'
import Job from "./Job";
const Explore = () => {
  // const jobs = [
  //   {
  //     position: "Senior analyst",
  //     company: "Newton school",
  //     experience: "0 to 4 years",
  //     location: "Gurgaon",
  //     link:"https://www.newtonschool.co/",
  //     description:"lorem100000000000000000000000000"
  //   }, 
  //   {
  //     position: "Senior manager",
  //     company: "Amazon",
  //     experience: "4 to 6 years",
  //     location: "Banglore",
  //     link:"https://www.newtonschool.co/",
  //     description:"lorem100000000000000000000000000"
  //   },
  //   {
  //     position: "Senior analyst",
  //     company: "Newton school",
  //     experience: "0 to 4 years",
  //     location: "Gurgaon",
  //     link:"https://www.newtonschool.co/",
  //     description:"lorem100000000000000000000000000"
  //   }, 
  //   {
  //     position: "Senior manager",
  //     company: "Amazon",
  //     experience: "4 to 6 years",
  //     location: "Banglore",
  //     link:"https://www.newtonschool.co/",
  //     description:"lorem100000000000000000000000000"
  //   },
  //   {
  //     position: "Senior analyst",
  //     company: "Newton school",
  //     experience: "0 to 4 years",
  //     location: "Gurgaon",
  //     link:"https://www.newtonschool.co/",
  //     description:"lorem100000000000000000000000000"
  //   }, 
  //   {
  //     position: "Senior manager",
  //     company: "Amazon",
  //     experience: "4 to 6 years",
  //     location: "Banglore",
  //     link:"https://www.newtonschool.co/",
  //     description:"lorem100000000000000000000000000"
  //   },
  // ]
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      let result = await fetch('http://localhost:9000/jobs');
      result = await result.json();
      setJobs(result);
    }
    getJobs();
  }, [])
  return (
    <div>
      <nav style={{height:"150px",  backgroundImage: "linear-gradient(#33d4d4 , teal)", display:"flex", justifyContent:"center", alignItems:"center"}}>
        {/* <input type="text" style={{borderRadius:"20px", width:"300px", height:"50px"}}/> */}
      </nav>
      <div className="container" style={{marginTop:"50px"}}>
        {
          jobs.map(j => {
            return <Job position={j.position} company={j.company} experience={j.experience} location={j.location} link={j.link} desc={j.description}/>
          })
        }
      </div>
    </div>
  );
};

export default Explore;
