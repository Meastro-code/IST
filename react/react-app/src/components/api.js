import React, {useState} from 'react';

function API(){
    const [greeting, setGreeting] = useState('');

    const fetchData = async()=>{
        const response = await fetch("/api/hello-world");
        const data = await response.json();
        setGreeting(data.message);
    };

    const sendGreeting =  async()=>{
        const response =  await fetch("/api/hello-world",{
            method: "POST",
            body: JSON.stringify({greeting}),
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
        alert(data.message);
    }
    return(
        <div>
            <button onClick={fetchData}>Get Hello World</button>
            <p>{greeting}</p>
            <input type="text" value={greeting} />
            <button onClick={sendGreeting}>Send Greeting</button>
        </div>
    );
}

export default API;