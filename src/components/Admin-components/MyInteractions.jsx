import Header from "../header-footer-components/header"
import { useState, useRef, useEffect } from "react"
import { LucideMessagesSquare, MenuIcon, MessageSquareTextIcon, Eye , Lock, Play, Trash2Icon, Archive} from "lucide-react"
import './MyInteractions.css'
import outsideClickFunction from "./outsideClickFunction"
export default function MyInteraction(){
    const [option, setOption]=useState(false);
    const optionsRef=useRef(null);
    const optionIcon=useRef(null);

     outsideClickFunction([optionsRef, optionIcon],  ()=>setOption(false));
    
   
    return(
    <main>
     <Header title='CHRIS POLL'/>
     <div className="interaction">
     <div className="interaction-add">
        <p>My Interaction</p>
        <button>+ Add</button>
     </div>
     <p>Audience Q&A</p><br />
       <div className="q-a-n">
        <div>
           < LucideMessagesSquare style={{color:'red'}}/> 
        <p><span>0</span> <span>questions</span></p>
        </div>
         <MenuIcon 
         onClick={()=> setOption(true)} ref={optionIcon}/>
         </div>
         { option &&
            <div className="q-a-options" ref={optionsRef}>
            <button><Lock/>Close Q&A</button>
            <button><Archive/>Archive all questions</button>
            <button><Trash2Icon/>Delete</button>
         </div>
         }
       
         <br />
    <p>Polls</p><br />
    <div className="polls-display">
    {/* <p>Your polls will appear here</p> */}
        <div>
            <div className="name">
            <p>Name</p>
            <MenuIcon/>
            </div><br />
            <div className="votes">
            <MessageSquareTextIcon/> 
            <span>0 votes</span> <Eye/> <Lock/> 
            <button><Play/></button> 
            </div>
        </div>
    </div>
     </div>
    </main>
    
    )
}