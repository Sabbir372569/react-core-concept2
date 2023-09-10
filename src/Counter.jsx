// Set a State where we add a state and remove state

import { useState } from "react"

export default function Counter(){
   const [count,setCount] = useState(0); //initial state bole dite hobe tahole change korar ekta function dibe
   
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);            // add  a initial state 
    }


    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }


    return(
        <div style={{border:'2px solid yellow'}}>
            <h2>Counter:{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
    // function 
}