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
    window.localStorage.setItem("members-crud", JSON.stringify(newListUsers));
  }

  const handleEditUser = (newInfor) =>{
    const newListUsers = [...listUsers]
    const editIndex = newListUsers.findIndex(user => user.key === newInfor.key)
    newListUsers[editIndex] = newInfor
    setListUsers([...newListUsers])
    window.localStorage.setItem("members-crud", JSON.stringify(newListUsers));
  }
  
  
  return (
    <div>
      <h1 id='title'>Member List</h1>
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
                  <EditUser user={user} handleEdit={(infor) =>handleEditUser(infor)}/>
                  <button className="button muted-button " onClick = {() => handleDeleteUSer(user)}>Delete</button>
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