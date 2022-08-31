import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function Check({ todo, changeSet, id }) {
    return <div className="todo__check" >
        {todo.isComplited ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    </div>
}

export default Check;