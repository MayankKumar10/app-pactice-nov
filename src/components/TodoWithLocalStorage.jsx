import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo, TodoState, updateTodo } from '../app/TodoSlice'

export const TodoWithLocalStorage = () => {
  const { todoForm } = useSelector((state)=> state.todo)
  const [todo, setTodo] = useState(todoForm)

  const dispatch = useDispatch()

  let localStorageData = JSON.parse(localStorage.getItem("todo1"))

  const [localData, setLocalData] = useState(localStorageData || [])

  console.log("localStorage", {localStorageData})


  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setTodo((prev)=> ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(()=>{
    setTodo(todoForm)
  },[todoForm])


  const onSubmitHandler = (e) => {
    e.preventDefault();
    todo.id ? dispatch( updateTodo(todo)) : dispatch( addTodo({...todo, id: Date.now()}) )
    setTodo(TodoState)
    setLocalData(JSON.parse(localStorage.getItem("todo1")))
  }

  const onRemoveHandle = (id) => {
    dispatch(removeTodo({id: id}))
    setLocalData(JSON.parse(localStorageData.getItem("todo1")))
  }

  useEffect(()=>{
    setLocalData(localStorageData)
  },[onRemoveHandle])


  return (
    <div>
      <h4>TodoWithLocalStorage</h4>

      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">title:
        <input type="text" 
         name="title" 
         value={todo.title}
         onChange={onChangeHandler}
        />
        </label>

        <label htmlFor="">info:
        <input type="text" 
         name="info" 
         value={todo.info}
         onChange={onChangeHandler}
        />
        </label>
        
        <button type="submit">Submit</button>
      </form>

      <div style={{ display: "flex", flexDirection: "column", border: "1px solid black" }}>
        {
          localData?.length > 0 && localData.map((item)=>(
            <div key={item.id} style={{ display: "flex", border: "1px solid black" }}>
              <h4>{item.title}</h4> &nbsp; &nbsp; 
              <p>{item.info}</p> &nbsp; &nbsp;
              <button onClick={()=> dispatch(editTodo({id: item.id}))}>Edit</button>
              <button onClick={()=>onRemoveHandle(item.id)}>Remove</button>
            </div>
          ))
        }

      </div>

    </div>
  )
}
