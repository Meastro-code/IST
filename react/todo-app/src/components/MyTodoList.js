import Todo from './Todo.js';

const MyTodoList = ({todoList})=>{
    return(
        <div className="todolist">
            <h3>Todo list...</h3>
            <h4>{todoList.map((item)=>(<Todo item={item}/>))}</h4>
        </div>
    );
}

export default MyTodoList;