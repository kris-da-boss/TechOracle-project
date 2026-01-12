export default function QuizNameInteraction({setQuestionName, name,setAddInteraction, setOtherInteractions}){
    return(
        <>
         <input type="text" placeholder="Quiz name..." className="question-input" onChange={(e)=>setQuestionName(e.target.value)}/>
                  <br /><br /><br /><br /><br/><br/>
                 <div className="no-poll">
                    <p>{name} is Empty</p><br />
                    <button onClick={()=>setOtherInteractions(true)}>+ Add first question</button>
      </div> 
        </>
    )
}