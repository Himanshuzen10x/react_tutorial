import { useState } from "react";

function Toggle(){
const [display,setdisplay]= useState(true)
const [show,setshow] = useState(true)
return(
    <>
    <h1>Toggle in react </h1>
    <button onClick={()=>setdisplay(!display)}>Toggle</button>
    {
        display?<h1>Himanshu Display</h1>:null
    }
    {
                show?<h1>you are human</h1>: <h2>you are not human</h2>

    }
    </>
)
}

export default Toggle