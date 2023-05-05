import {Component} from 'react';

class MyMsg extends Component {
     click = ()=>{
        console.log("clicked");
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.click()}>Click</button>
            </div>
        );
    }
}

export default MyMsg;