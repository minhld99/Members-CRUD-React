import './../styles/table.css';
import React from 'react'
import EditUser from './EditUser'

function UserTable( { users } ) {
  return (
    <div>
      <h1 id='title'>Member List</h1>
      <table id='user'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>OPERATION</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className='opration'>
                  <EditUser user={user} />
                  <button className="button muted-button">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable