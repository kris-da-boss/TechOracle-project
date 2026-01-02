import AddInteraction from "./AddInteraction";
import { useState } from "react";
import NoInteraction from "./NoInteraction";
import IfInteraction from "./IfInteraction";
import { Trash2Icon} from "lucide-react";
export default function SelectInteraction({name, questions, setQuestions}){
    const [addInteraction, setAddInteraction]=useState(false);
    const [questionName, setQuestionName]=useState('');
    const [question, setQuestion]=useState('');


    return(
       <div className="selectInteraction"> 
        <div className="name-delete">
                <p>{name}</p>
                  <Trash2Icon/>
                 </div> 
                 <br /> 
      { questions.length===2? <NoInteraction 
       name={name}
       setQuestionName={setQuestionName}
       setAddInteraction={setAddInteraction}
       addInteraction={addInteraction}
       question={question}
       setQuestion={setQuestion}
       questions={questions}
       setQuestions={setQuestions}
       /> 
       : 
        <IfInteraction 
       questionName={questionName}
       questions={questions}
       setQuestions={setQuestions}
       question={question}
       setQuestion={setQuestion}
       />
      }

     
       </div>
    )
}