import { Trash2Icon} from "lucide-react";
import AddInteraction from "./AddInteraction";
import { useState } from "react";
export default function SelectInteraction({name}){
    const [addInteraction, setAddInteraction]=useState(false);
    return(
       <div className="selectInteraction">  
       
       <div className="name-delete">
        <p>{name}</p>
          <Trash2Icon/>
         </div> <br />
         <input type="text" placeholder="Quiz name..." className="question-input"/>
          <br /><br /><br /><br /><br/><br/>
         { <div className="no-poll">
            <p>{name} is Empty</p><br />
            <button onClick={()=>setAddInteraction(true)}>+ Add first question</button>
            </div>
         }
         {/* Add Interaction */}
         {addInteraction&&<AddInteraction
         setAddInteraction={setAddInteraction}
         name={name}
         /> }
       <br/> <br/><br/><br/>
         <div className="launch">
            <div>
             <span>+</span>
            <button>Launch</button>
            </div> 
        </div>
       </div>
    )
}