import './poll-dashboard.css'
import { MessageCircleWarning } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router'
export default function CreatepollForm(){
    const navigate=useNavigate();
    document.body.style.overflow='hidden'
    return(
        <div className='create-poll-form'>
         <h3>When do you intend using this poll?</h3><br />
          <form action="">
            <label htmlFor="startdate">
                <p>Start date</p>
                <input type="date" className="date"/>
            </label>
            <label htmlFor="enddate">
             <p>End date</p>
             <input type="date" 
              className="date"
              />
            </label>
            <label htmlFor="name">
                <p>Give your poll a name</p>
                <input type="text" 
                className='name'
                placeholder='Enter name'
                />
            </label><br />

            <p className='note'>
                <MessageCircleWarning/>Anyone with the code or link can participate</p><br />
            <div className='cancel-create-btn'>  
                <button>cancel</button>
                <button onClick={()=> navigate('/my-interaction')}>create poll</button>
            </div>
          </form>
        </div>

    )
}