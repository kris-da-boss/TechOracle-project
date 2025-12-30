import { ArrowBigLeftIcon, Dice3Icon, Settings, Trash2Icon } from "lucide-react"
import { useState,  memo, useEffect, useRef } from "react"
export default function AddInteraction({setAddInteraction, name}){
    const inputRef=useRef([])
    const [question, setQuestion]=useState([]);
    const [disabled, setDisabled]=useState(true);
    const [toggleCheckbox, settoggleCheckbox]=useState(false)
    const [option, setOption]=useState([ 
        {
            id:1,
            value:''
        },{
            id:2,
            value:''
        }
    ]);
   useEffect(()=>{
      const inputCheck=option.some(opt=> opt.value!=='')
      const checkbox=inputRef.current.some(inp=>inp.checked)

         if(inputCheck && checkbox){
            setDisabled(false)
         }else{
            setDisabled(true)
         }
   },[option,toggleCheckbox ])
    

    function addOptions(){
        setOption(prev=>{
            const nextOption=prev[prev.length-1].id+1
            return(
             [...prev,{
                id:nextOption,
                value:''
            }])   
        } )
    }
    function deleteOption(id){
    setOption(prev=> prev.length>2?prev.filter((opt)=>opt.id!==id):prev);
    }
    function updateValue(id, newValue){
            setOption(prev=> prev.map((input)=>input.id===id? {...input,value:newValue}: input));
    }

    const displayOptions=option.map((opt, index)=> {
        return(
            <div className="option" key={index}>
            <div>
              <input type="checkbox" ref={i=>inputRef.current[index]=i} onChange={()=>settoggleCheckbox(!toggleCheckbox)}/>
               <input type="text"  
                placeholder={`Option ${index+1}`} 
                value={opt.value} 
                onChange={(e)=>updateValue(opt.id, e.target.value)}/>
               {option.length > 2 && <Trash2Icon onClick={()=>deleteOption(opt.id)} className="deleteOption"/>}
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
        <div className="add-interaction">
           <button className="back" onClick={()=>setAddInteraction(false)}>
             <ArrowBigLeftIcon/> back to {name}</button>
             <br /><br />
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
            <input type="text" placeholder="what would you like to ask?"/>
            <p>Don't forget to mark the correct answer</p>
            </div>
            <br /><br/>
            {/* Add Options */}
             {option.length > 0 && displayOptions}
              <br />

            <button className="more-options" onClick={addOptions}>+ Add option</button>
            <br /><br />
            <div className="launch">
            <div>
             <span>+</span>
            <button disabled={disabled}>Launch</button>
            </div> 
        </div>
        </div>
    )
}