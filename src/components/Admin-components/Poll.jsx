export default function(){
    return(
        <>
           <div>
            <button> 
                All <span>1</span>
            </button> 
            <button>
                active and upcoming <span>1</span>
            </button>
            <button>past <span>0</span></button>
           </div>
           <input type="search"  
           placeholder="search by name owner, code"/> <br />
           <select  id="">
            <option value="">All polls</option>
            <option value="">Created by me</option>
            <option value="">Organization polls</option>
           </select>
        </>
    )
}