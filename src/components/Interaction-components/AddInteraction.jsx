import { ArrowBigLeftIcon, Dice3Icon, Play, ReceiptRussianRuble, Settings, Trash2Icon } from "lucide-react"

import { useState,  memo, useEffect} from "react"
import AddQuestions from "./addQuestions";
import EditQuestion from "./EditQuestions";
import Leaderboard from "./Leaderboard";
 export default function AddInteraction({setAddInteraction, name, question, setQuestion,questions, setQuestions, editQuestion, editQuestionArray, setEditQuestionArray, leaderboard, setAddNewInteraction, setOtherInteractions}){
    return(
        <div className="add-interaction">
         { name==='Quiz' && <button className="back" onClick={()=>{
            setAddInteraction(false),
            setOtherInteractions(false),
            setAddNewInteraction(false)
           }}>
             <ArrowBigLeftIcon/> back to {name}</button>}
             <br /><br />
             {
                editQuestion ? <EditQuestion
                className={leaderboard?'closeEdit':''}
                questions={questions}
                name={name}
                editQuestionArray={editQuestionArray}
                setQuestions={setQuestions}
                setEditQuestionArray={setEditQuestionArray}
                />
                :  
            <AddQuestions
            className={leaderboard? 'closeEdit':''}
            setAddInteraction={setAddInteraction}
            name={name}
            question={question}
            setQuestion={setQuestion}
            setQuestions={setQuestions}
            setAddNewInteraction={setAddNewInteraction}
            setOtherInteractions={setOtherInteractions}
            />
            
            }
            {
                leaderboard  && <Leaderboard/>
            }
            </div>
    )
}
