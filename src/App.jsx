import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Login from "./components/auth-components/Login";
import Welcome from "./components/auth-components/Welcome";
import Signup from "./components/auth-components/Signup";
import Dashboard from "./components/Admin-components/dashboard";
import MyInteraction from "./components/Interaction-components/MyInteractions";

export default function App(){
useEffect(()=>{
  Aos.init({
    duration:500,
    once:false,
    easing:'ease-in-out'
    } )
}, [])

return(
  <>
    <Routes>
      <Route path="/" element={
        // <Welcome/>
        <Dashboard/>
        }/>
        <Route path="welcome" element={<Welcome/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="my-interaction" element={<MyInteraction/>}></Route>

    </Routes>
  </>
)
}
