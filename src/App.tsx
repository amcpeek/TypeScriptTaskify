import React, { useState } from 'react';
import InputField from './components/InputField';
import './App.css';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

const App: React.FC = () => {
 const [todo, setTodo] = useState<string>("")
 const [todos, setTodos] = useState<Todo[]>([])
 const [completedTodos, setCompletedTodos]= useState<Todo[]>([])

 const handleAdd = (e: React.FormEvent) => {
  e.preventDefault()
  if(todo) {
    setTodos([...todos, {id:Date.now(), todo,isDone:false}])
    setTodo("")
  }
 }
 const onDragEnd = (result:DropResult) => {
  const { source,destination } = result
  if(!destination) return
  if(destination.droppableId===source.droppableId && destination.index===source.index) return
  let add,
  active = todos,
  complete = completedTodos
  if(source.droppableId === 'TodosList') {
    add=active[source.index]
    active.splice(source.index,1)
  } else {
    add=complete[source.index]
    complete.splice(source.index,1)
  }
  if(destination.droppableId === 'TodosList') {
    active.splice(destination.index, 0, add)
  } else {
    complete.splice(destination.index, 0, add)
  }
  setCompletedTodos(complete)
  setTodos(active)

 }
return (
  <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
    <span className='heading'>Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList
    todos={todos}
    setTodos={setTodos}
    completedTodos={completedTodos}
    setCompletedTodos={setCompletedTodos}
    />
    </div>
    </DragDropContext>
  );
}
export default App;


// //Typescript basics
// ///
// let name: string = 'Annika'
// let age: number | string;
// age = "Twenty Two"
// let isStudent: boolean;
// let hobbies:string[];
// let role:[number, string];
// role=[5,'edad']
// ///

// function printName(name: string) {
// console.log('name', name)
// }
// printName('Eriki')
// let printName2: Function;
// let printName3: (name: string) => void
// ///
// let name2: any //dont do this
// let unknownIsBetter: unknown //dont use any
// let printName4: (name: string) => never;


// ///
// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: 'Anni',
//   age: 22
// }

// let lotsOfPeople:Person[];
// ///
// //interact instead of typ
// interface Person2 {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }


// type X = {
//   a: string;
//   b: number;
// }

// type Y = X & {
//   c: string;
//   d: number;
// }


// let y:Y = {
//   a: 'hi',
//   b: 20,
//   c: 'efdas',
//   d: 42
// }

// //can mix
// type W = Person &  {
//   a: string;
//   b: number;
// }

// interface Person3 extends X {
//   name: string;
//   age?: number
// }
