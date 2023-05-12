import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


    const TodoForm=({todo,setTodo,todoList,setTodoList})=>{
        const handleChange = (event)=>{
        setTodo(event.target.value);
        console.log(todo);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodoList([...todoList,todo]);
        console.log(todoList);
    }
return(
    <div>
        <Form className="pt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="float-start ml-5">Add Item:</Form.Label>
                <Form.Control value={todo} type="text" placeholder="Add Item..." onChange={handleChange}></Form.Control>
            </Form.Group>
        </Form>
        <Button className="mb-5 float-end" variant="primary" type="submit" onClick={handleSubmit}>add Item</Button>
    </div>
);
};
    
 

export default TodoForm;