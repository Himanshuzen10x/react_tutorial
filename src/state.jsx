import { useState } from "react";


export const Counter = () => {
    const [count, setcount] = useState(0)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setcount(count + 1)}>update counter</button>
        </div>
    )
}

function StateUse() {
    const [Fruit, setFruit] = useState("Apple")
    const HandleFruit = () => {
        setFruit("Banana")


    }

return (
    <div>
        <h1>{Fruit}</h1>
        <button onClick={HandleFruit}> change the Fruit Name </button>
        
    </div>

)
}

export default StateUse