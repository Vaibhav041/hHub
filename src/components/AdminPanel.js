import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [position, setPos] = useState();
  const [company, setCom] = useState();
  const [experience, setExp] = useState();
  const [location, setLoc] = useState();
  const [description, setDes] = useState();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    let result = await fetch("http://localhost:9000/jobs");
    result = await result.json();
    setJobs(result);
  };

  const addJob = async (e) => {
    e.preventDefault();
    console.log("hello");
    let result = await fetch("http://localhost:9000/add-job", {
      method: "post",
      body: JSON.stringify({
        position,
        company,
        experience,
        location,
        description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
        getJobs();
    }
    setCom('');
    setPos('');
    setDes('');
    setExp('');
    setLoc('');
  };
  const DeleteJob = async (e) => {
    let result = await fetch(`http://localhost:9000/delete/${e}`, {
        method:"Delete"
    })
    result = await result.json();
    if (result) {
        getJobs();
    }
  }
  return (
    <>
      <div className="AddJob">
        <h1>Add Job</h1>
        <form
          style={{ display: "flex", flexDirection: "column", width: "800px" }}
          onSubmit={addJob}
        >
          <input
            type="text"
            placeholder="position"
            onChange={(e) => setPos(e.target.value)}
            value={position}
          />
          <input
            type="text"
            placeholder="company"
            onChange={(e) => setCom(e.target.value)}
            value={company}
          />
          <input
            type="text"
            placeholder="experience"
            onChange={(e) => setExp(e.target.value)}
            value={experience}
          />
          <input
            type="text"
            placeholder="location"
            onChange={(e) => setLoc(e.target.value)}
            value={location}
          />
          {/* <input
            type="text"
            placeholder="description"
            onChange={(e) => setDes(e.target.value)}
            value={description}
          /> */}
          <textarea placeholder="description"
            onChange={(e) => setDes(e.target.value)}
            value={description} rows={7} cols={40} />
          <button>Add</button>
        </form>
      </div>
      <div style={{marginTop:"25px"}}>
        <h1>Delete Jobs</h1>
        {
          jobs.map(j => {
            return <div className="card m-5">
                <p>{j.position}</p>
                <p>{j.company}</p>
                <p>{j.location}</p>
                <p>{j.experience}</p>
                <button onClick={() => DeleteJob(j._id)}>Delete</button>
            </div>
          })
        }
      </div>
    </>
  );
};

export default AdminPanel;
