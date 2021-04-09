import './../styles/table.css';
import React from 'react'
import UserTable from './UserTable'


function EditUser( { user } ) {
    const [studentID, setStudentID] = React.useState('');
    const [task, setTask] = React.useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(user,studentID,task);
        user.studentID=studentID;
        user.task=task;
        console.log('done',user);
    }

    return (
        <div>
            <button type="button" className="button muted-button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button>        
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit User {user.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Student ID:</label>
                    <input type="text" className="form-control" placeholder={user.studentID} id="recipient-name" value={studentID} onChange={e => setStudentID(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Task:</label>
                    <textarea className="form-control" placeholder={user.task} id="message-text" value={task} onChange={e => setTask(e.target.value)}/>
                  </div>
                  <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" value='Submit' className="btn btn-primary" >Save</button>
              </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        </div>
    );
}

export default EditUser


