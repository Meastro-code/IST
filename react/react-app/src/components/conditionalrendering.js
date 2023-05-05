import {useState} from 'react';

const ConditionalRendering = ()=>{
    const [display] = useState(false);
    // let output;
    if(display){
        return(
            <div>
                <h1>Display is true hence this line is displayed.</h1>
            </div>
        )
    }else {
        return(
            <div>
                <h1>Display is false.</h1>
            </div>
        )
    }
}

export default ConditionalRendering;