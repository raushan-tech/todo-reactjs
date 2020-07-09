import React , {useState} from 'react';
const axios = require('axios').default;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  
  const handleSubmit = e => {

    e.preventDefault();
    if (!value) return;
    axios
      .post("http://localhost:3000/api/course/value", {users : value})
      .then((res)=>{
        addTodo(res.data.value);
        setValue("");
      });
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder= "type here"
        type="text"
        className="input"
        value={value}
        onChange={handleInput}
      />
    </form>
  );
}
export default TodoForm;