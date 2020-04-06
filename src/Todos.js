import React from "react"

const Todos = ({todos, deleteTodo}) => {

    // checking if the todoList has any elements and handling both possible scenarios
    const todoList = todos.length ? (
        todos.map (todo =>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}> {todo.content}</span> 
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todo's left, hurra! </p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos