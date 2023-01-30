import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
            <ul>
                <li>
                <h3>{todo} &nbsp;&nbsp; <button className='btn_clr' onClick={() => deleteHandler(index)}>Delete</button></h3>
            

                </li>
            </ul>
                </div>)}
        </div>
    )
}

export default TodoList
