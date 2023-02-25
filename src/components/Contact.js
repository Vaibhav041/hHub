import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Get in Touch</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Contact Number</label>
          <input
            type="number"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your 10 digit number"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Description"
            rows="6"
          ></textarea>
        </div>
        <button type="submit" class="btn" style={{marginTop:"8px", borderRadius:"5px"}}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
