import './header.css'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import Nav from './Nav'
export default function Header({title, interaction}){
    const [showNav, setShowNav]=useState(false);
    return(
        <>
        <div className='user-header'>
            <button onClick={()=>setShowNav(true)}><MenuIcon/> </button>
               <h2>{title}</h2>            
        </div>
      <Nav 
       showNav={showNav}
       setShowNav={setShowNav}
       interaction={interaction}
       />
          </>
    )
}