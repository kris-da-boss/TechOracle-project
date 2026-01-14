import { useEffect } from "react"
export default function outsideClickFunction(ref, onOutsideClick){
  useEffect( ()=>{
           function handler(e){
            if(ref.every(ref=> ref.current && 
            !ref.current.contains(e.target))){  
            onOutsideClick();
        }add
           }
        document.addEventListener('mousedown', handler)
    return function(){
        document.removeEventListener('mousedown' ,handler)
    }
    },[])
}