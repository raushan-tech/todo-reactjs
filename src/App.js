import React ,{useState,useEffect} from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./Todofrom";
const axios = require('axios').default;


function App() {
  const [todos, setTodos] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:3000/api/course/value")
      .then((res)=>{
        setTodos(res.data.value)
      })
    },[]);

  const addTodo = value => {
    setTodos(value);
  };

  const completeTodo = index => {
    const newTodos = todos.map((todo, i) => {
      if(i === index){
        todo.isCompleted = true;
      }
      return todo;
    })
    setTodos(newTodos);
  };
 
  const removeTodos = (id) => {
    axios.delete("http://localhost:3000/api/course/value?_id=" + id)
    .then((res) => {
      setTodos(res.data.value);
    });
  }
  
  return( 
    <div>
      <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodos={removeTodos}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  </div>
)}
    
export default App;