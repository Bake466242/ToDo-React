import React, {useState} from 'react'

const ToDo = () => {
    const [todos, setTodos] = useState([
        'first todo',
        'second todo',
        'third todo'
    ])

    return (
        <>
        <h1>To Do:</h1>
        {todos.map(item => {
            console.log(item)
            return <h2 className="text-warning">{item}</h2>
            })}
        </>
    )
}

export default ToDo