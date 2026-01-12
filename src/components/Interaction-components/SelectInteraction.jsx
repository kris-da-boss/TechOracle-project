import AddInteraction from "./AddInteraction";
import { useState } from "react";
import NoInteraction from "./NoInteraction";
import IfInteraction from "./IfInteraction";
import { Trash2Icon} from "lucide-react";
export default function SelectInteraction({name, questions, setQuestions, addNewInteraction, setAddNewInteraction, otherInteractions, setOtherInteractions}){
    const [addInteraction, setAddInteraction]=useState(false);
    const [questionName, setQuestionName]=useState('');
    const [question, setQuestion]=useState('');
    const [editQuestion, setEditQuestion]=useState(false);
    const [editQuestionArray,setEditQuestionArray]=useState(null);
    const [leaderboard, setLeaderboard]=useState(false);
    
    function questionEdit(id){
     const editQues=questions.find((question)=> question.id ===id)
    setEditQuestionArray(editQues)
    }
                                    
    return(
       <div className="selectInteraction"> 
        <div className="name-delete"> 
                <p>{name}</p>
                  <Trash2Icon/>
                 </div> 
                 <br/> 
      {!otherInteractions && questions.length>0 && !addNewInteraction?   
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
       setLeaderboard={setLeaderboard}
       setOtherInteractions={setOtherInteractions}
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
       leaderboard={leaderboard}
       setLeaderboard={setLeaderboard}
       setAddNewInteraction={setAddNewInteraction}
       otherInteractions={otherInteractions}
       setOtherInteractions={setOtherInteractions}
       /> 
      }

     
       </div>
    )
}