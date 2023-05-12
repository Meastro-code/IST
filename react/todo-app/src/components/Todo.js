import Button from 'react-bootstrap/Button'
const Todo = ({item})=>{
    return(
    <div>
        <div className="todoItem">
            <h4>{item}</h4>
            <Button className="mt-5" variant="danger" type="submit">done</Button>
        </div>
    </div>);
}

export default Todo;