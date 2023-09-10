import { useState } from "react"

export default function Team(){
   const [team, setTeam] = useState(11);       //definded a state 
   
   const handleAdd = () =>{
        const newTeam = team + 1;   //add player arrow function
        setTeam(newTeam);
   }

   const handleReduce = () =>{
        const newTeam = team - 1;   //Remove player arrow function
        setTeam(newTeam);
   }

    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',                 // style object 
        padding:'15px',
        borderRadius:'15px'
    }
    return(
    <div style={teamStyle}>
        <h3>Players:{team}</h3>
        <button onClick={handleAdd}>Add</button>       {/* add player event handler */}
        <button onClick={handleReduce}>Remove</button> {/* Remove player event handler */}
    </div>
    )
}