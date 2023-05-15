import Button from 'react-bootstrap/Button'
const Todo = ({item,todoList,setTodoList})=>{
    const deleteTodo =()=>{
        setTodoList(todoList.filter((todo)=>todo.id !==  item.id));
    }
    return(
    <div>
        <div className="todoItem">
            <h4>{item.name}</h4>
            <Button onClick={deleteTodo} className="mt-5" variant="danger" type="submit">done</Button>
        </div>
    </div>);
}

export default Todo;