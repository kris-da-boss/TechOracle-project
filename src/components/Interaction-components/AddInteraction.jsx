import { ArrowBigLeftIcon, Dice3Icon, Play, ReceiptRussianRuble, Settings, Trash2Icon } from "lucide-react"

import { useState,  memo, useEffect} from "react"
import AddQuestions from "./addQuestions";
import EditQuestion from "./EditQuestions";
 export default function AddInteraction({setAddInteraction, name, question, setQuestion,questions, setQuestions, editQuestion, editQuestionArray, setEditQuestionArray}){
    return(
        <div className="add-interaction">
           <button className="back" onClick={()=>setAddInteraction(false)}>
             <ArrowBigLeftIcon/> back to {name}</button>
             <br /><br />
             {
                editQuestion ? <EditQuestion
                questions={questions}
                name={name}
                editQuestionArray={editQuestionArray}
                setQuestions={setQuestions}
                setEditQuestionArray={setEditQuestionArray}
                />
                :  
            <AddQuestions
            setAddInteraction={setAddInteraction}
            name={name}
            question={question}
            setQuestion={setQuestion}
            setQuestions={setQuestions}
            />
            
            }
            </div>
    )
}
