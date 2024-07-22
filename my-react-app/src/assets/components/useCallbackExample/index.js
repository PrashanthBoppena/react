import React from 'react'
import { useState, useCallback } from 'react'
import Todos from './Todos'
function UseCallbackExample() {
    const [count, setCount]=useState(0);
    const [todos, setTodos]=useState([]);

    const increment =()=>{
        setCount((C)=>C+1);
    };
    
    const addTodo = useCallback(()=>{
        setTodos((t)=>[...t, "New Todo"]);
    },[todos]);
  return (
    <div>
      <Todos todos={todos} addTodo={addTodo}/>
      <hr/>
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallbackExample
