import { Settings } from "lucide-react"
export default function EditQuestion({questions, name, editQuestionArray, setQuestions, setEditQuestionArray}){
    
    function questionHandler(e){
        const value=e.target.value;
         setEditQuestionArray(prev=> ({...prev,question:value}));
         setQuestions(prev=> 
            prev.map((question)=>question.id ===editQuestionArray.id?
            {...question, question:value}: question))
    }
return(
    <>  
     <div className="intro">
                       <div>
                        <p>{name} question</p>
                       <p><span>{0}</span> votes <span></span>
                        <span>{20} sec</span>
                        </p>
                       </div>
                       <div>
                          <Settings/>
                       </div>
                       </div>
                       <br /><br />
                       <input type="text" 
                       value={editQuestionArray.question}
                       onChange={(e)=>questionHandler(e)}
                       />
            
    </>
)}