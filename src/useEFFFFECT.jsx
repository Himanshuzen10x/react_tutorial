import { useEffect, useState } from "react"

function USEEFFECT(){
    const [counter, setcounter] = useState(0);

    useEffect(()=>{
        counterFunction();

    }, [counter])

    function counterFunction(){
        console.log("counterfunction", counter);
        
        
    }
    return(
        <div>

            <button onClick={()=>setcounter(counter+1)}>COUNTER{ counter }</button>
        </div>
        
        
    )
}

export default USEEFFECT;