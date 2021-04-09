import './../styles/table.css';

function UserTable( { users } ) {
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
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.student_id}</td>
                <td>{user.task}</td>
                <td className='opration'>
                  <button className="button muted-button">Edit</button>
                  <button className="button muted-button">Delete</button>
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