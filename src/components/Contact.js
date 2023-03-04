import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a9xdgwi', 'template_pn3fj5k', form.current, 'SWKg2Ni-ymUrAE_kQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Message sent");
      navigate('/');
  };
  return (
    <div style={{height:"100vh",background:"#f5f5f5"}}>
    <div className="container">
      <h1 style={{ textAlign: "center", margin: "50px", fontFamily: "sans-serif", color: "black"}}>Get in Touch</h1>
      <form onSubmit={sendEmail} ref={form}>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name*"
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address*"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="number"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your 10 digit number*"
            name="number"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Message"
            rows="6"
            name="message"
          ></textarea>
        </div>
        <button type="submit" class="btn2" style={{marginTop:"8px", borderRadius:"5px"}}>
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
