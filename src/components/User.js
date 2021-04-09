import React from 'react'
import UserTable from './UserTable'
import NewUser from './NewUser'

/* カスタムフック */
import useStorage from '../hooks/storage';

function User() {
  // const [users, setUsers] = React.useState([
  //   { id: 1, name: 'Minh', email: 'minh@gmail.com', phone: '123456' },
  //   { id: 2, name: 'T.Anh', email: 'tanh@gmail.com', phone: '123456' },
  //   { id: 3, name: 'Công', email: 'cong@gmail.com', phone: '123456' },
  //   { id: 4, name: 'Đức', email: 'duc@gmail.com', phone: '123456' },
  //   { id: 5, name: 'Hằng', email: 'hang@gmail.com', phone: '123456' },
  // ]);
  
  const [users, setUsers, clearUsers] = useStorage();
  
  return (
    <div className="panel">
      <UserTable users={users} />
      <div className="panel-block">
        {users.length !== 0 ? users.length + " members" : ''}
      </div>
      <button className="button is-light is-fullwidth" onClick={clearUsers}>
        Delete All
      </button>
    </div>
  );
}

export default User