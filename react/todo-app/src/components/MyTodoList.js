import Todo from './Todo.js';

const MyTodoList = ({todoList,setTodoList})=>{
    return(
        <div className="todolist">
            <h3>Todo list...</h3>
            <h4>{todoList.map((item)=>(<Todo key={item.id} item={item} todoList={todoList} setTodoList={setTodoList}/>))}</h4>
        </div>
    );
}

export default MyTodoList;