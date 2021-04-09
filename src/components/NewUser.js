import React, { useState } from 'react'
import User from './User'
import './../styles/newUser.css';

/* カスタムフック */
import useStorage from '../hooks/storage';

function NewUser() {
  const initialFormState = { id: null, name: '', student_id: '', task: '' }
  const [user, setUser] = useState(initialFormState)

  const [users, setUsers, clearUsers] = useStorage();

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setUser({ ...user, [name]: value })
  }
  
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.student_id) return
          addUser(user)
          setUser(initialFormState)
      }}
    >
      <label>名前</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>学籍番号</label>
      <input
        type="text"
        name="student_id"
        value={user.student_id}
        onChange={handleInputChange}
      />
      <label>タスク</label>
      <input
        type="text"
        name="task"
        value={user.task}
        onChange={handleInputChange}
      />
      <button type="submit" is="add-button">Add new user</button>
    </form>
  )
}

export default NewUser