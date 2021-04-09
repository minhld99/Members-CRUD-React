import './../styles/table.css';
import React, {useState, useEffect} from 'react'
import EditUser from './EditUser'

function UserTable( { users } ) {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    setListUsers(users)
  }, [users])

  const handleDeleteUSer = (deleteUser) => {
    const newListUsers = [...listUsers]
    const deleteIndex = newListUsers.findIndex(user => user.key === deleteUser.key)
    newListUsers.splice(deleteIndex,1)
    setListUsers([...newListUsers])
  }
  
  return (
    <div>
      <h1 id='title'>Member List</h1>
      <table id='user'>
        <thead>
          <tr>
            <th>番号</th>
            <th>名前</th>
            <th>学籍番号</th>
            <th>タスク</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.length > 0 ? (
            listUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.studentID}</td>
                <td>{user.task}</td>
                <td className='opration'>
                  <EditUser user={user} />
                  <button className="button muted-button " onClick = {() => handleDeleteUSer(user)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No members</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable