import { useState } from "react"

function Multitoggle(){
    const [onenmoretoggle, settoggle] = useState(0);
    return (
        <div>
        <button onClick={()=>settoggle(onenmoretoggle +1)}> FoodMenu </button>

        {
            onenmoretoggle == 0? <h1>pizza</h1>:
            onenmoretoggle == 1? <h1>dosa</h1>:
            onenmoretoggle ==2? <h1>maggie</h1>: <h1>anyfood</h1>
        }
    
        </div>

    )
}

export default Multitoggle