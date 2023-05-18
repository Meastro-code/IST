import {useState} from 'react';

const FunctionalComponent = ()=>{
    const [counter, setCounter] = useState(0);
    const increment = ()=>{
        setCounter(counter=>counter + 1);
    }
    const incrementFive = ()=>{
        for(let i = 0;i < 5;i++){
            setCounter(counter=> counter + 1)
        }
    }
    return(
        <div>
            <h1>The counter value is: {counter}</h1>
            <button onClick={()=>setCounter(0)}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    );
}

export default FunctionalComponent;