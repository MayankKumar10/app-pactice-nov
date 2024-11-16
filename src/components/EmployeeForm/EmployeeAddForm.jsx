import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee, editEmployee, employeeState, removeEmployee, updateEmployee } from '../../app/EmployeeSlice'

export const EmployeeAddForm = () => {
  const { data, employeeForm } = useSelector((state)=> state.employee)
  const [user, setUser] = useState(employeeForm)
  const dispatch = useDispatch();
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setUser((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  console.log({data, employeeForm})

  const onSubmitHandler = (e) => {
    e.preventDefault()
    user.id ? dispatch(updateEmployee(user)) : dispatch(addEmployee({...user, id: Date.now()}))
    setUser(employeeState)
  }

  useEffect(()=>{
    setUser(employeeForm)
  },[employeeForm])
  

  return (
    <div>
      <h4>EmployeeAddForm</h4>

      <form action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">
          FirstName
          <input type="text" 
          name="FirstName" 
          value={user?.FirstName}
          onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="">
          LastName
          <input type="text" 
          name="LastName" 
          value={user?.LastName}
          onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="">
          Email
          <input type="email" 
          name="Email" 
          value={user?.Email}
          onChange={onChangeHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div style={{display: "flex", flexDirection: "column", border: "1px solid black"}}>
        {
          data.length > 0 && data.map((e)=> (
            <div key={e.id} style={{display: "flex", border: "1px solid black"}}>
              <p>{e?.FirstName} &nbsp; {e?.LastName} &nbsp; {e?.Email}</p>
              <button onClick={()=>dispatch(editEmployee({id: e.id}))}>Edit</button>
              <button onClick={()=>dispatch(removeEmployee({id: e.id}))}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
