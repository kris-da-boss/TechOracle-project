import AddInteraction from "./AddInteraction";
export default function({name,setQuestionName,setAddInteraction, addInteraction, question , setQuestion, questions, setQuestions, editQuestion, editQuestionArray, setEditQuestionArray}){

    return(
        <>
                 <input type="text" placeholder="Quiz name..." className="question-input" onChange={(e)=>setQuestionName(e.target.value)}/>
                  <br /><br /><br /><br /><br/><br/>
                 { <div className="no-poll">
                    <p>{name} is Empty</p><br />
                    <button onClick={()=>setAddInteraction(true)}>+ Add first question</button>
                    </div> }
                 {/* Add Interaction */}
                 {addInteraction && <AddInteraction
                 setAddInteraction={setAddInteraction}
                 name={name}
                 setQuestion={setQuestion}
                 question={question}
                 questions={questions}
                 setQuestions={setQuestions}
                 editQuestion={editQuestion}
                 editQuestionArray={editQuestionArray}
                 setEditQuestionArray={setEditQuestionArray}
                 /> }
               <br/> <br/><br/><br/>
                 <div className="launch">
                    <div>
                     <span>+</span>
                    <button disabled={true}>Launch</button>
                    </div> 
                </div>
        </>
    )
}