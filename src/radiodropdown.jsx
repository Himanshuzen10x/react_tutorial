import { useState } from "react";

function Radiodropedown(){

    const [radio, setradio] = useState('Female')
    const [city, setCity] = useState('Delhi')

    return(
    <div>
        <h1>Handle Radio and Dropedown Menu</h1>
        <br />
        <h2>Select Gender</h2>
        
        <input type="radio" onChange={(event)=>setradio(event.target.value)} name="gender" value={"Male"} id="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input type="radio" checked={radio=='Female'} onChange={(event)=>setradio(event.target.value)} name="gender" value={"Female"} id="female" />
        <label htmlFor="female">Female</label>
        <h2>Your Gender: {radio}</h2>
        <hr />
        <h2>
            Select City
        </h2>
        <select onChange={(event)=>setCity(event.target.value)} name="" id="" defaultValue={"delhi"}>
            <option value="Noida"> Noida</option>
            <option value="Gurgoa"> Gurgoa</option>
            <option value="Delhi"> Delhi</option>
        </select>
        <h2>City You Selected: {city}</h2>


    </div>
)}

export default Radiodropedown;