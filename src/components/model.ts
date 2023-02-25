export interface Todo {
    id:number;
    todo:string;
    isDone:boolean;

}
//just explaining this in this file, but should implement it on a .tsx file

// type Actions=
// | {type:'add'; payload:string}
// | {type:'remove'; payload:number}
// | {type:'done'; payload:number}

// const TodoReducer=(state:Todo[], action:Actions)=>{
//     switch(action.type) {
//         case "add":
//             return [
//                 ...state,
//                 {id: Date.now(), todo: action.payload, isDone: false}
//             ]
//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload)
//         case 'done':
//             return state.map((todo) =>
//             todo.id !== action.payload ? { ...todo, isDone: !todo.isDone} : true)
//         default:
//             return state;
//     }

// }

// import React, { useReducer } from 'react'
// const ReducerExample = () => {

//     const [state, dispatch] = useReducer(TodoReducer, [])
//   return (
//     <div/>
//   )
// }

// export default ReducerExample
