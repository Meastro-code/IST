const ConsMsg = ()=>{
    const click = ()=>{
        console.log("Clicked!");
    }
    return (
        <div>
            <button onClick={()=>click()}>Click Me!</button>
        </div>
    );
    
}

export default ConsMsg;