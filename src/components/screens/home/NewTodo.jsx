import React from "react";

function NewTodo({ inputValue, setInputValue }) {
    return <div className="todo__item_add">
        <input autoFocus={true} value={inputValue} onChange={event => setInputValue(event.target.value)} className="todo__input" />
    </div>
}

export default NewTodo;