import React from 'react'

const SignIn = () => {
  return (
    <div className='vh'>
      <div className= "vvh">
      <div className = "vvhh"> Log In</div>
      
      <div className=" form2 shadow-lg">
      <form className= "form1">
        {/* <h1> Login</h1> */}
        <div class="form-group1">
          <label for="exampleInputEmail1">Email </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          
        </div>
        <div class="form-group1">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
      
        <button type="submit" class="btn1" >
          Login
        </button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default SignIn