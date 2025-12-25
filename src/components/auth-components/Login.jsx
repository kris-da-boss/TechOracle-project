import { Link } from "react-router";
import { useState, useRef, useMemo } from "react";
export default function Login(){
    const [showPassword, setShowpassword]=useState(false);
    const [mailMessage, setMailMessage]=useState(false)
    const [email, setEmail]=useState('');
    const [passWord, setPassword]=useState('')
    const emailInput=useRef(null)

    
    function emailFunc() {
      if(email===''){
        setMailMessage(true);
      }else{
        setShowpassword(true)
        setMailMessage(false) 
      }
    }
    return(
   <>
   <main>
   <Link to='/'><h2 className="logo logo-signup">ChoiceHub</h2></Link>
   <h3>Log into your account</h3><br />
   <p>Haven't signed up yet? <Link to='/signup'>create account</Link></p><br /><br/>
   <div className="google-signup">
    <p>Log in with Google</p>
    </div><br />
    <p className="or">or</p>
    <br/>
   {!showPassword && 
   <div className="signup-form">
         <input  type="mail" 
          required placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          ref={emailInput}
          />   
          {mailMessage&&<p style={{color:'red', textAlign:'start'}}>please add your email</p>}
        <br/>
        <button onClick={emailFunc}>Continue</button>
        
    </div>} 

    {showPassword  && <form className="signup-form">
        <label htmlFor="password">
            <input type="password" required placeholder="password" />
            <p>forgot password?</p><br />
        </label>
        <button onChange={(e)=>setPassword(e.target.value)}>Log in</button>
    </form>}
    </main>
   </>
    )
}