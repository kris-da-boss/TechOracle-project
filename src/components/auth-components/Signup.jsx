import { Link } from "react-router"
import { useState } from "react"
import { ArrowBigRight } from "lucide-react";
import './login-signup.css';

export default function Signup(){
const [name, setName]=useState('');
const [password, setPassword]=useState('');
const [email, setEmail]=useState('');


    return(
    <>
    <main>
   <Link to='/'> <h2 className="logo logo-signup">ChoiceHub</h2></Link>
   <h3>Sign up as meeting host</h3>
   <p>or  <Link to='/login'>Log in to your account</Link></p><br /><br />
   <div className="google-signup">
     <p>Signup with Google</p>
   </div><br /><br />
    <p className="or">or</p>  <br />

   <form action="" className="signup-form">
    <label htmlFor="full-name">
        <input 
        type="text"
        placeholder="full name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        required
        />
    </label>

    <label htmlFor="email">
        <input 
        type="mail" 
        placeholder="email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        required
        />
    </label>

    <label htmlFor="password">
        <input 
        type="password" 
        placeholder="password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        required
        />
    </label>
    <button type="submit">Create account</button>
   </form>
   <br /><br />
   <p>by signing up you agree with our Terms and conditions</p><br /><br />
   <div className="join-as-participant j-a-p">
    <h3>Joining as a participant?</h3>
    <p>No account needed</p>
      <button className="participant-code-btn">
              <input type="text" placeholder='Enter Code Here'/>
              <span>
              <ArrowBigRight/>
              </span>
            </button>
   </div>
   </main>
    </>
          
    )
       
}