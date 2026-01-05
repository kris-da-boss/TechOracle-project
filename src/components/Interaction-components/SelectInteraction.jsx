import AddInteraction from "./AddInteraction";
import { useState } from "react";
import NoInteraction from "./NoInteraction";
import IfInteraction from "./IfInteraction";
import { Trash2Icon} from "lucide-react";
export default function SelectInteraction({name, questions, setQuestions}){
    const [addInteraction, setAddInteraction]=useState(false);
    const [questionName, setQuestionName]=useState('');
    const [question, setQuestion]=useState('');
    const [editQuestion, setEditQuestion]=useState(false);
    const [editQuestionArray,setEditQuestionArray]=useState(null);

    function questionEdit(id){
     const editQues=questions.find((question)=> question.id ===id)
    setEditQuestionArray(editQues)
    console.log(editQuestionArray)
    }

    return(
       <div className="selectInteraction"> 
        <div className="name-delete">
                <p>{name}</p>
                  <Trash2Icon/>
                 </div> 
                 <br/> 
      { !addInteraction && questions.length>0?  
        <IfInteraction 
       questionName={questionName}
       questions={questions}
       setQuestions={setQuestions}
       question={question}
       setQuestion={setQuestion}
       setAddInteraction={setAddInteraction}
       addInteraction={addInteraction}
       setEditQuestion={setEditQuestion}
       questionEdit={questionEdit}
       />
       : 
      <NoInteraction 
       name={name}
       setQuestionName={setQuestionName}
       setAddInteraction={setAddInteraction}
       addInteraction={addInteraction}
       question={question}
       setQuestion={setQuestion}
       questions={questions}
       setQuestions={setQuestions}
       editQuestion={editQuestion}
       editQuestionArray={editQuestionArray}
       setEditQuestionArray={setEditQuestionArray}
       /> 
      }

     
       </div>
    )
}