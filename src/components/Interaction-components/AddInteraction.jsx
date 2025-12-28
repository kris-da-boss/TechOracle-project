import { ArrowBigLeftIcon, Dice3Icon, Settings, Trash2Icon } from "lucide-react"
import { useState } from "react"
export default function AddInteraction({setAddInteraction, name}){
    const optionArray=[
        {
            no:1,
        },
        {
            no:2,
        }
    ]
    const [option, setOption]=useState(optionArray);
    function addOptions(){
        setOption(prev=>{
            const nextOption=prev[prev.length-1].no+1
            return(
             [...prev,{
                no:nextOption
            }])   
        } )
    }
    function deleteOption(number){
         setOption(prev=> prev.length>2?prev= prev.filter((option)=>option.no!==number):prev)
    }

    const displayOptions=option.map((opt, index)=> {
        return(
            <div className="option" key={crypto.randomUUID()}>
            <div>
              <input type="checkbox"/>
               <input type="text"  placeholder={`Option ${index+1}`}/>
               {option.length > 2 && <Trash2Icon onClick={()=>deleteOption(opt.no)}/>}
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
            <button>Launch</button>
            </div> 
        </div>
        </div>
    )
}