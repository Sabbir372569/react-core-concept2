import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './user';
import Friends from './friends';




function App() {
  
  function handleClick(){         //used normal function
    alert('button clicked');
  }

  const handleClick2 = () =>{     //Used arrow function on handleClicked2 button 
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num+5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
        <Friends></Friends>
        <Users></Users>
        <Team></Team>
        <Counter></Counter>

      {/* <button onclick={handleClick}>Click Me</button>  normal html/js event handle*/}  
       <button onClick={handleClick}>Click Me</button>     {/* react event handle */}
       <button onClick={handleClick2}>Clicked2</button>
       <button onClick={() =>{alert('third clicked')}}>third</button>  {/* button er vitor sorasori function take deya hoyeche */}
       {/* <button onClick={addToFive}>Four</button>   button passed with no parameter */}
       <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}
    
export default App
 