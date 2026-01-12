import { ArrowBigLeftIcon, ListCheck, CloudFog, MessageSquareText, SignalHighIcon, Star, FolderCheck, Trophy} from "lucide-react"
import Header from "../header-footer-components/header"
import SelectInteraction from "./SelectInteraction";
import { useState } from "react";

export default function({setAddInteraction, questions, setQuestions, addNewInteraction,setAddNewInteraction}){
    const [showInteraction, setShowInteraction]=useState(false);
    const [otherInteractions, setOtherInteractions]=useState(false);
    const [interactionName, setInteractionName]=useState('');
    const interactionChoice=[
        {
            icon:<Trophy/>,
            name: 'Quiz',
        },
        {
            icon:<ListCheck/> ,
            name: 'Multiple choice'
        },
        {
            icon:<CloudFog/> ,
            name: 'Word cloud'
        },
        {
            icon:<MessageSquareText/> ,
            name: 'Open text'
        },
        {
            icon:<SignalHighIcon/> ,
            name: 'Ranking'
        },
        {
            icon:<Star/> ,
            name: 'Rating'
        },
        {
            icon:<FolderCheck/> ,
            name: 'Survey'
        },
    ]
    const displayInteractionchoice=interactionChoice.map((choice)=>   
    <button key={crypto.randomUUID()}
    onClick={()=> {
        setShowInteraction(true),
        getName(choice.name), 
        choice.name!=='Quiz'? setOtherInteractions(true):null
    }}
    >
        {choice.icon} 
        <p>{choice.name}</p>
         </button>
                 )
             function getName(name){
               setInteractionName(name)
             }
    return(
        <main className="interaction-choice">
        <Header 
        title='CHRIS POLL'
        interaction={true} 
        />
        <div className="div">
          <div className="note">
            <ArrowBigLeftIcon className="back-arrow" onClick={()=>setAddInteraction(false)}/>
           {!showInteraction && <p>ADD NEW INTERACTION</p>} 
             </div> <br/><br/>
             { !showInteraction && <div className="interaction-choices">
                {displayInteractionchoice}
             </div>} 
          </div>
         {showInteraction && 
         <SelectInteraction
         name={interactionName}
         questions={questions}
         setQuestions={setQuestions}
         addNewInteraction={addNewInteraction}
         setAddNewInteraction={setAddNewInteraction}
         otherInteractions={otherInteractions}
         setOtherInteractions={setOtherInteractions}
         />} 
        </main>
    )
}