import React from 'react'
import './../styles/newUser.css';

/* カスタムフック */
import useStorage from '../hooks/storage';
import InputText from '../hooks/InputText';

function NewUser() {
  const initialFormState = { id: null, name: '', studentID: '', task: '' }
  const [user, setUser] = React.useState(initialFormState)

  const [users, setUsers, ] = useStorage();

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value });
  }
  
  const addUser = (user) => {
    if (users.length > 0) {
      const last_user = users[(users.length) - 1]
      user.id = last_user.id + 1
    }
    else user.id = users.length + 1
    setUsers([...users, user])
    console.log(user)
  }
  const [idChecker,onCheck] = InputText();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.studentID) return
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
        name="studentID"
        value={user.studentID}
        onChange={handleInputChange}
        onFocus={onCheck(user.studentID)}
      />
      <p class = {onCheck(user.studentID)}>Duplicate Id</p>
      <label>タスク</label>
      <input
        type="text"
        name="task"
        value={user.task}
        onChange={handleInputChange}
      />
      <button type="submit" is="add-button">新しいメンバーを追加</button>
    </form>
  )
}

export default NewUser