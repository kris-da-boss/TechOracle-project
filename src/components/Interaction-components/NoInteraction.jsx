import AddInteraction from "./AddInteraction";
import QuizNameInteraction from "../Different-Interactions/QuizNameInteractin";

export default function({name,setQuestionName,setAddInteraction, addInteraction, question , setQuestion, questions, setQuestions, editQuestion, editQuestionArray, setEditQuestionArray, leaderboard, setLeaderboard, setAddNewInteraction, otherInteractions, setOtherInteractions}){

    return(
        <>      
        {name==='Quiz' &&  <QuizNameInteraction
        setQuestionName={setQuestionName}
        name={name}
        setOtherInteractions={setOtherInteractions}
        /> }
                 {/* Add Interaction */}
                 { addInteraction || otherInteractions  && <AddInteraction
                 setAddInteraction={setAddInteraction}
                 name={name}
                 setQuestion={setQuestion}
                 question={question}
                 questions={questions}
                 setQuestions={setQuestions}
                 editQuestion={editQuestion}
                 editQuestionArray={editQuestionArray}
                 setEditQuestionArray={setEditQuestionArray}
                 leaderboard={leaderboard}
                 setLeaderboard={setLeaderboard}
                 setAddNewInteraction={setAddNewInteraction}
                setOtherInteractions={setOtherInteractions}
                 /> }
               <br/><br/><br/><br/>
                 <div className="launch">
                    <div>
                     <span>+</span>
                    <button disabled={true}>Launch</button>
                    </div> 
                </div>
        </>
    )
}