import React from "react";
import { useState } from "react";
import TodoItem from "./item/TodoItem";
import { nanoid } from 'nanoid'
import { AiFillPlusSquare, AiFillPlusCircle } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import NewTodo from "./NewTodo";

function id() {
    return nanoid()
}

const todos = [
    {
        id: id(),
        title: 'Finish the essay collaboration',
        isComplited: false,
    },
    {
        id: id(),
        title: 'Read the next chapter of book',
        isComplited: false,
    },
    {
        id: id(),
        title: 'Do the math for next monday',
        isComplited: false,
    },
    {
        id: id(),
        title: 'Make todo app in react',
        isComplited: false,
    }
]

const Home = () => {
    let [todo, setTodo] = useState(todos)
    let [isAdding, setIsAdding] = useState(false);
    let [inputValue, setInputValue] = useState('')

    function changeSet(id) {
        setTodo(todo.map(todo => {
            if (todo.id === id) {
                todo.isComplited = !todo.isComplited
            }
            return todo;
        }))
    }

    function newInputTodo(inputValue) {
        setTodo([...todo, { id: id(), title: inputValue, isComplited: false }])
        console.log(inputValue)
        setIsAdding(!isAdding);
        setInputValue('');
    }

    function removeTodo(id) {
        setTodo([...todo].filter(todo => todo.id !== id))
    }

    let addElement;
    if (isAdding) {
        addElement = <>
            <NewTodo inputValue={inputValue} setInputValue={setInputValue} />
            <MdDone className="add__button" onClick={() => newInputTodo(inputValue)} />
        </>
    } else {
        addElement = <AiFillPlusCircle className="add__button" onClick={() => setIsAdding(!isAdding)} />
    }

    let result = todo.map(todo => {
        return <TodoItem key={todo.id} id={todo.id} todo={todo} changeSet={changeSet} removeTodo={removeTodo} />
    })

    return (<div className="dark">
        <div className="page__title">To<span className="page__title_pink">Do</span> App</div>
        {result}
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {addElement}
            {/* <AiFillPlusCircle className="add__button" onClick={() => setIsAdding(!isAdding)} /> */}
        </div>
    </div>
    )
}

export default Home;