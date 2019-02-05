import React from 'react'

const Todos=({todos,deleteTodo})=>{
    const todoList=todos.length ? 
    (todos.map(todo=>{
        return(
            <div className="container">
            <p key={todo.id}>{todo.content}</p>
            <button onClick={()=>{deleteTodo(todo.id)}} className="btn btn-danger">Delete </button>
            </div>
        )
    })) : 
    (<p>No Todos</p>)
   
    return(
        <div className="container list-group">
            {todoList}
        </div>
    )
}

export default Todos;