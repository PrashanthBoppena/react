import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState, useEffect, useRef, useReducer} from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from'./assets/components/Layout.jsx';
import AppRouter from './assets/components/AppRouter.jsx';
import SignInPage from'./assets/components/SignInPage.jsx';
import { AuthProvider } from './assets/components/AuthContext.js';
import SignUpPage from './assets/components/SignUpPage.jsx';

  const initialTodos =[
    {
      id:1,
      title:"Todo 1",
      complete:false,
    },
    {
      id:2,
      title:"Todo 2",
      complete:false,
    },
  ];

  const reducer =(state, action)=>{
    switch(action.type){
      case "COMPLETE":
        return state.map((todo)=>{
          if(todo.id===action.id){
            return {...todo, complete:!todo.complete};
          }else{
            return todo;
          }
        });
      default:
        return state;  
        

    }
  }
  function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete=(todo)=>{
      dispatch({type:"COMPLETE", id:todo.id});
    };
    

  return (
    <>
    {
      todos.map((todo)=>(
        <div key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.complete} onChange={()=>handleComplete(todo)}/>
            {todo.title}
          </label>
        </div>
      ))
    }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
<AppRouter />
</AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
