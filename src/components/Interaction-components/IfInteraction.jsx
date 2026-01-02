import { User2Icon } from "lucide-react"
import { useMemo, useState } from "react"
export default function IfInteraction({questionName, question, questions, setQuestions}){

 const displayQuestions=questions.map((ques, index)=>{
    return(
        <div key={index}>
        <div>
        <span>1</span>
        <div>
            <p>Quiz question</p>
            <p><span>0</span> Votes <span>20 sec</span></p>
        </div>
        </div>
        <p>{ques.question}</p>
       </div>
    )
 })
    return(
        <div>
       <h3>{questionName}</h3>
       <div>
        <User2Icon/>
        <div>
            <p>Joining quiz</p>
            <p>waiting for participants</p>
        </div>
       </div>
       <br />
       <hr />
       <br />
       {displayQuestions}
        </div>
    )
}