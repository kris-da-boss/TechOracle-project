import Header from "../header-footer-components/header"
import Poll from "./Poll"
import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react";
import CreatePoll from "./CreatePoll";
import CreatepollForm from "./CreatePollForm";

export default function Dashboard (){
    const [openPollForm, setOpenPollForm]=useState(false);
    return(
        <>
        <main>
       <Header title='My Dashboard'/>   
        {/* <Poll/> */} <br /><br /> <br /><br />
        
         {openPollForm && 
         <>
         <div className="overlay" onClick={()=> setOpenPollForm(false)}></div>
         <CreatepollForm/> 
         </>} 

       <CreatePoll
       openPollForm={openPollForm}
       setOpenPollForm={setOpenPollForm}
       />
        
        </main>
        </>
    )
}