import React from 'react'
import UserTable from './UserTable';

/* カスタムフック */
import useStorage from '../hooks/storage';

function User() {
  const [length, setLength] = React.useState(JSON.parse(window.localStorage.getItem('members-crud')).length);
  
  const [users, , clearUsers] = useStorage();

  const handleLengthChange = (newLength) => {
    if (newLength === 0) clearUsers()
    setLength(newLength);
  }

  return (
    <div className="panel">
      <UserTable users={users} handleLengthChange={newLength => handleLengthChange(newLength)}/>
      <div className="panel-block">
        {length !== 0 ? length + (length > 1 ? " members" : " member") :  ''}
      </div>

      <button className="button is-light is-fullwidth" onClick={() => handleLengthChange(0)}>
        全てのメンバーを削除
      </button>

    </div>
  );
}

export default User