import React from 'react'
import SingleTodo from '../SingleTodo';
import { Todo } from './model'
import "./styles.css"

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {todos.map(todo => (

          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
        ))}
      </div>
      <div className="todos remove">
      <span className="todos_heading">Completed Tasks</span>
        {todos.map(todo => (

          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
        ))}

      </div>

    </div>
    //without dnd
    // <div className='todos'>
    //     {todos.map(todo => (
    //         <SingleTodo
    //         todo={todo}
    //         key={todo.id}
    //         todos={todos}
    //         setTodos={setTodos}
    //         />
    //     ))}
    // </div>
  )
}

export default TodoList
