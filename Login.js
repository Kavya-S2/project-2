import React from 'react';
import './Login.css';
function Login(){
  return (
    <div class="container">
      <h2>Login</h2>
      <form>
        <label>
          Username/Email:
          <input
            type="text"
            name="Username"
             
          />
        </label>
        <label>
          Password:
          <br/>
          <input
            type="password"
            name="password"
             
          />
        </label>
        
        <a href="/" >Forget Your Password?</a>
        <br /><br/>
        <button type="submit" class="b1">Login</button>
        
        <p><center>or</center></p>
        <button type="submit" class="b2">Request OTP</button>
        <br/>
        <a href="" >New to DigitSeed? SignUp</a>
               </form>
    </div>
  );
}

export default Login;
