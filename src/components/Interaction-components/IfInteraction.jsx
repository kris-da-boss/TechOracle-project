import { User2Icon, MedalIcon } from "lucide-react"
import { useMemo, useState } from "react"
import './ifInteraction.css'
export default function IfInteraction({questionName, questions, setAddInteraction, setEditQuestion, questionEdit,  setLeaderboard, setOtherInteractions}){
 const displayQuestions=questions.map((ques, index)=>{
    return(
        <div key={ques.id} 
        className="question"
        onClick={()=>{
            setOtherInteractions(true)
            setEditQuestion(true),
            questionEdit(ques.id),
            setLeaderboard(false)}} 
        >
        <div>
        <span className="id">{index+1}</span>
        <div>
            <p>Quiz question</p>
            <p>{0} Votes <span>{20} sec</span></p>
        </div>
        </div><br/>
        <p>{ques.question}</p>
       </div>
       )})
    return(
        <div className="ifInteraction">
       <h3>{questionName}</h3>
       <br />
       <div  className="w-f-p-note">
        <span>
         <User2Icon/>
        </span>
        
        <div>
            <p>Joining quiz</p>
            <p>waiting for participants</p>
        </div>
       </div>
       <br />
       <hr />
       <br />
       {displayQuestions}
       <br />
      <div className="leaderboard">
        <span>
         <MedalIcon/>
        </span>
        
        <div onClick={()=> {
            setLeaderboard(true), 
            setOtherInteractions(true)}}>
            <p>Leaderboard</p>
            <p>Quiz results</p>
        </div>
      </div>
        </div>
    )
}