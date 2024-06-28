import React from 'react'
import { useState } from 'react'
import img1 from "../Components/img/img5.webp"
import img2 from "../Components/img/img2.jpg"
import img3 from "../Components/img/img3.webp"
import img4 from "../Components/img/img4.webp"

function Counter() {

    const [state , setState] = useState(0)
    const [count , setCount] = useState(0)
    const [third , setThird] = useState(0)
    const [forth , setForth] = useState(0)
    

    const handleIncrement = () =>{
        setState(state+1)
    }

    const handleDecrement = () =>{
        if(state === 0){
            setState(0)
        }else{
            setState(state-1)
        }
        
    }

    const handleReset = () =>{
        setState(0)
    }

   

    const handleIncremen = () =>{
        setCount(count+1)
    }

    const handleDecremen = () =>{
        if(count === 0){
            setCount(0)
        }else{
            setCount(count-1)

        }
      
    }
    const handleRese = () =>{
        setCount(0)
    }

    const handleIncreme = () =>{
        setThird(third+1)
    }

    const handleDecreme = () =>{
        if(third === 0){
            setThird(0)
        }else{
            setThird(third-1)

        }
      
    }
    const handleRes = () =>{
        setThird(0)
    }

    const handleIncrem = () =>{
        setForth(forth+1)
    }

    const handleDecrem = () =>{
        if(forth === 0){
            setForth(0)
        }else{
            setForth(forth-1)

        }
      
    }
    const handleRe = () =>{
        setForth(0)
    }

    

    
  return (
    <>
        <center>
        <h1 id='heading'>Watches</h1>
        </center>

        <parts>

       
    <i1>
        <img  src={img1} alt="" />
    <h2>Add to cart : {state}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button> <br /> <br />
    </i1>
    

    
    <i2>
    <img  src={img2} alt="" />
    <h2>Add to cart : {count}</h2>
    <button onClick={handleIncremen}>Increment</button>
    <button onClick={handleDecremen}>Decrement</button>
    <button onClick={handleRese}>Reset</button>
    </i2>

    <i3>
    <img src={img3} alt="" />
    <h2>Add to cart : {third}</h2>
    <button onClick={handleIncreme}>Increment</button>
    <button onClick={handleDecreme}>Decrement</button>
    <button onClick={handleRes}>Reset</button>
    </i3>

    <i4>
    <img src={img4} alt="" />
    <h2>Add to cart : {forth}</h2>
    <button onClick={handleIncrem}>Increment</button>
    <button onClick={handleDecrem}>Decrement</button>
    <button onClick={handleRe}>Reset</button>
    </i4>

    </parts>
    
    </>

  
  )
}

export default Counter