import './../styles/table.css';
import React, {useState, useEffect} from 'react'
import EditUser from './EditUser'

function UserTable( { users, handleLengthChange } ) {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    setListUsers(users)
  }, [users])

  const handleDeleteUser = (deleteUser) => {
    console.log("deleteUser = ", deleteUser)
    const newListUsers = [...listUsers]
    const deleteIndex = newListUsers.findIndex(user => user.id === deleteUser.id)
    newListUsers.splice(deleteIndex,1)
    setListUsers([...newListUsers])
    handleLengthChange(newListUsers.length)
    window.localStorage.setItem("members-crud", JSON.stringify(newListUsers));
  }

  const handleEditUser = (newInfo) => {
    console.log("newInfo = ", newInfo)
    const newListUsers = [...listUsers]
    const editIndex = newListUsers.findIndex(user => user.id === newInfo.id)
    newListUsers[editIndex] = newInfo
    setListUsers([...newListUsers])
    window.localStorage.setItem("members-crud", JSON.stringify(newListUsers));
  }
  
  
  return (
    <div>
      <h1 id='title'>メンバー・リスト</h1>
      <table id='user'>
        <thead>
          <tr>
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
                <td>{user.name}</td>
                <td>{user.studentID}</td>
                <td>{user.task}</td>
                <td className='opration'>
                  <EditUser user={user} handleEdit={handleEditUser}/>
                  <button className="button muted-button" onClick={() => handleDeleteUser(user)}>削除</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No members</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable