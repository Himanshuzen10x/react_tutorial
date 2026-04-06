import { useState } from "react"

function Cheakboxxx(){
    const [skill, setskill] = useState([])
    const handleskill=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setskill([...skill, event.target.value])
        } else{
            setskill([...skill.filter((iteam)=>iteam !=event.target.value)])
        }
        

    }
    return(
        <div>
            <h3>
                select your Skill
                <br />
                <input type="checkbox" onChange={handleskill} id="php"  value={"PHP"}/>
                <label htmlFor="php">PHP</label>
                <br />
                <input type="checkbox" onChange={handleskill} id="JAVA"  value={"JAVA"}/>
                <label htmlFor="JAVA">JAVA</label>
                <br />
                <input type="checkbox" onChange={handleskill} id="PYTHON"  value={"PYTHON"}/>
                <label htmlFor="PYTHON">PYTHON</label>
                <br />
                <input type="checkbox" onChange={handleskill} id="C++"  value={"C++"}/>
                <label htmlFor="C++">C++</label>

                <h1>{skill.toString()}</h1>
            </h3>
        </div>
    )
}

export default Cheakboxxx