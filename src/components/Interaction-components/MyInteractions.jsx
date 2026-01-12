import Header from "../header-footer-components/header"
import { useState, useRef, useEffect } from "react"
import { LucideMessagesSquare, MenuIcon, MessageSquareTextIcon, Eye , Lock, Play, Trash2Icon, Archive, DivideSquare, Edit, FilePlus2, Link2, ListRestart} from "lucide-react"
import './MyInteractions.css'
import outsideClickFunction from "../Admin-components/outsideClickFunction"

import SelectInteractions from "./SelectInteractions"
export default function MyInteraction(){
    const [addInteraction, setAddInteraction]=useState(false);
    const [addNewInteraction, setAddNewInteraction]=useState(false);
    const [option, setOption]=useState(false);
    const [option2, setOption2]=useState(false);
     const [questions, setQuestions]=useState([]);
    const optionsRef=useRef(null);
    const optionIcon=useRef(null);
    const optionRef2=useRef(null);
    const optionIcon2=useRef(null);
    console.log(questions)
     outsideClickFunction([optionsRef, optionIcon], 
     ()=>setOption(false));
     outsideClickFunction([optionRef2, optionIcon2], ()=>setOption2(false))
    return(
    <main>
     <Header 
     title='CHRIS POLL'
     interaction={true} 
     />
     <div className="interaction">
     <div className="interaction-add">
        <p>My Interactions</p>
        <button onClick={()=>{
            setAddInteraction(true),
             setAddNewInteraction(true)}}>+ Add</button>
     </div>
     {/* This is options of Interactions for the user to select */}
     {addInteraction && <SelectInteractions 
     addInteraction={addInteraction} 
     setAddInteraction={setAddInteraction}
     questions={questions}
     setQuestions={setQuestions}
     addNewInteraction={addNewInteraction}
     setAddNewInteraction={setAddNewInteraction}
     />}
      
      

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
            <MenuIcon ref={optionIcon2} onClick={()=>setOption2(true)}/>
            </div><br />
            <div className="votes">
                <div>
            <MessageSquareTextIcon/> 
            <span>0 votes</span>
                </div>
            <div> 
                <Eye/> 
                <Lock/> 
                <button><Play/></button>
            </div> 
            </div>
        </div>
    </div>
    {
        option2 && <div className="q-a-options" ref={optionRef2}>
        <button><DivideSquare/> Add a divider below</button>
        <button><Edit/>Edit</button>
        <button><FilePlus2/>Duplicate</button>
        <button><Link2/>Direct link</button>
         <button><ListRestart/>Reset results</button>
         <button><Trash2Icon/>Delete</button>
    </div>
    }

    
     </div>
    </main>
    
    )
}