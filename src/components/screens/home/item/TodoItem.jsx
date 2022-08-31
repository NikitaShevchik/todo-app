import React from "react";
import Check from "./Check";
import { HiOutlineTrash } from 'react-icons/hi'

function TodoItem({ todo, id, changeSet, removeTodo }) {
    return <div className="todo__item">
        <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => changeSet(id)}>
            <Check todo={todo} changeSet={changeSet} id={id} />
            {todo.isComplited ? <div className="title__done">{todo.title}</div> : todo.title}
        </div>
        <div className="todo__trash" onClick={() => removeTodo(id)} > <HiOutlineTrash /></div>
    </div>
}

export default TodoItem;