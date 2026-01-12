import { useState, useEffect} from "react"
import QuizInteraction from "../Different-Interactions/QuizInteraction";
import OtherInteractionGen from "../Different-Interactions/OtherInteractionGen";
import OtherInteractions from "../Different-Interactions/OtherInteractions";
export default function AddQuestions({setAddInteraction, name, question, setQuestion, setQuestions, className, setAddNewInteraction, setOtherInteractions}){
 
    return(
        <>
      {name==='Quiz'?<QuizInteraction
      className={className}
      name={name}
      setQuestion={setQuestion}
      question={question}
      setAddNewInteraction={setAddNewInteraction}
      setQuestions={setQuestions}
      />:
      <>
      <OtherInteractionGen/>
      <OtherInteractions/>
      </>
     
       
        }

        </>
    )
}