import { useState } from "react";

function Inputlena(){
    const [val,setval]= useState()
    return(
        <div>
            <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="Enter Your name" />
<h1>{val}</h1>
<button onClick={()=>setval("")}>Clear Input Section </button>
        </div>
    )
}

export default Inputlena;