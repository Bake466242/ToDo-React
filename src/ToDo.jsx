import React, {useState} from 'react'
import SingleToDo from './todo/SingleToDo'

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const [inputItem, setInputItem] = useState()

    const handleSubmit = () => {
        console.log('my button is clicked')
        setTodos([...todos, inputItem])
        console.log('===>', inputItem)
    }
    console.log(todos)

    return (
        <>
        
        <form>
            <div className="form-group">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="new item"
            onChange={(event) => setInputItem(event.target.value)}
            />
            <button type="button" 
            className="btn btn-secondary"
            onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        {todos.map(item => {
            return (
                <SingleToDo/>
                )
            })}
        </>
    )
}

export default ToDo