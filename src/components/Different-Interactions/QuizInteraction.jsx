import { ArrowBigLeftIcon, Dice3Icon, Play, ReceiptRussianRuble, Settings, Trash2Icon } from "lucide-react"
import { useState,useEffect } from "react";
export default function QuizInteraction({className,name,setQuestion,question,setAddNewInteraction,setQuestions}){
    const [afterLaunch, setAfterlaunch]=useState(false);
     const [disabled, setDisabled]=useState(true);
    
        const [option, setOption]=useState([ 
                {
                    id:1,
                    value:'',
                    checked:false
                },
                {
                    id:2,
                    value:'',
                    checked:false
                }
            ]);
           useEffect(()=>{
              const inputCheck=option.some(opt=> opt.value.trim()!=='')
              const checkbox=option.some(opt=>opt.checked);
    
                 if(inputCheck && checkbox){
                    setDisabled(false)
                 }else{
                    setDisabled(true)
                 }
              },[option])
        
            //   addQuestions
         function addQuestions() {    
           const questionOption= option.map(opt=> opt)
             setQuestions(prev => {
            if (prev.some(q => q.question === question))
              return prev
            return [...prev, { 
                id:crypto.randomUUID(),
                question,
                questionOption
            }]
          }) }
        
            function addOptions(){
                setOption(prev=>{
                    const nextOption=prev[prev.length-1].id+1
                    return(
                     [...prev,{
                        id:nextOption,
                        value:'',
                        checked:false  
                    }])   
                } )
            }
            function deleteOption(id){
            setOption(prev=> prev.filter((opt)=>opt.id!==id));
            }
            function updateValue(id, newValue){
                    setOption(prev=> prev.map((input)=>input.id===id? {...input,value:newValue}: input));
            }
        
            function toggleChecked(id){
                setOption(prev=> 
                prev.map(opt=>opt.id===id ?
                {...opt, checked:!opt.checked}:opt))
            }
        
            const displayOptions=option.map((opt, index)=> {
                return(
                    <div className="option" key={index}>
                    <div>
                      <input type="checkbox"
                       checked={opt.checked}
                       onChange={()=>toggleChecked(opt.id)}/>
        
                       <input type="text"  
                        placeholder={`Option ${index+1}`} 
                        value={opt.value} 
                        onChange={(e)=>updateValue(opt.id, e.target.value)}/>
                       {option.length > 2 && <Trash2Icon onClick={()=>deleteOption(opt.id)} />}
                     </div>
                     <div className="percent">
                        <div>
                            <span></span>
                        </div>
                         <span>0%</span>
                     </div>
                      </div>
                )
            }) 
    return(
        <>
         <div className={className}>
                {  afterLaunch ? <p className="launch-note">Participants are joining</p>:
                       <>
                           <div className="intro">
                           <div>
                            <p>{name} question</p>
                           <p><span>0</span> votes <span></span>
                            <span>20 sec</span>
                            </p>
                           </div>
                           <div>
                              <Dice3Icon/>
                              <Settings/>
                           </div>
                           </div>
                           <br /><br />
                           <div className="input-note">
                           <input 
                            type="text"
                            placeholder="what would you like to ask?" onChange={(e)=>setQuestion(e.target.value)}
                            value={question}
                            />
                           <p>Don't forget to mark the correct answer</p>
                           </div>
                           <br /><br/>
                           {/* Add Options */}
                            {option.length > 0 && displayOptions}
                             <br />
                           <button className="more-options" onClick={addOptions}>+ Add option</button></>  
                       }
                           <br /><br />
                           {
                           afterLaunch ? <div className="launch">
                           <div>
                            <span><Play/></span>
                           <button disabled={disabled} onClick={()=>{setAfterlaunch(false)}}>First Question</button>
                           </div> 
                           </div>:<div className="launch">
                           <div>
                            <button onClick={addQuestions}>+</button>
                           <button disabled={disabled} onClick={()=>{
                            setAfterlaunch(true),
                             addQuestions(),
                             setAddNewInteraction(true)
                         }}>Launch</button>
                           </div> 
                           </div> }
                </div>
        </>
    )
}