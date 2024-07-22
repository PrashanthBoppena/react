import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Define initial state
const initialState = {
  todos: [],
  count: 0
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((todo, index) => index !== action.payload) };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      throw new Error();
  }
}

export default function UseReducerExapmle2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();

  const addTodo = () => {
    const todoText = inputRef.current.value;
    if (todoText) {
      dispatch({ type: 'ADD_TODO', payload: { text: todoText, completed: false } });
      inputRef.current.value = ''; // Clear input
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" ref={inputRef} placeholder="Add a new todo" />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: index })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


