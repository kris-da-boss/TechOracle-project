import { Settings, LockIcon, CheckCircle2 } from "lucide-react"
import './ifInteraction.css'
export default function EditQuestion({questions, name, editQuestionArray, setQuestions, setEditQuestionArray, className}){
    
    function questionHandler(e){ 
        const value=e.target.value;
         setEditQuestionArray(prev=> ({...prev,question:value}));
         setQuestions(prev=> 
            prev.map((question)=>question.id ===editQuestionArray.id?
            {...question, question:value}: question))
    }
    function optionhandler(e,id){
        const value=e.target.value;
        const  optionUpdate=editQuestionArray.questionOption.map(option=> option.id===id? {...option, value:value} : option)

     setEditQuestionArray(prev=>{  
        return ({...prev, questionOption: optionUpdate})
     })
     setQuestions(prev=> 
            prev.map((question)=>question.id ===editQuestionArray.id?
            {...question, questionOption:optionUpdate}: question))
    }

return(
    <div className={className}>  
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
                       <br /> <br />
                       <div className="editQuestion">
                 <input type="text" 
                 className="question"
                  value={editQuestionArray.question}
                  onChange={(e)=>questionHandler(e)}
                       />
                       <div>
                 {editQuestionArray.questionOption.map((option, index)=> <div key={index} className="options">
                    <div className="name">
                        {option.checked?<CheckCircle2 className="checkIcon"/> 
                        :<LockIcon  className="lockIcon"/>}
                   <input type="text" 
                 value={option.value}
                  onChange={(e)=>optionhandler(e, option.id)}
                    /> 
                    </div>
                   
                 <div className="percent">
                    <div>
                        <span className="gauge"></span>
                    </div>
                     <span>0%</span>
                 </div>     
                  </div>)}
                  </div>
                       </div>
                
            
    </div>
)}