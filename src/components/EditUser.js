import React from 'react'
import './../styles/table.css';
import InputText from '../hooks/InputText';

function EditUser( { user, handleEdit } ) {
    const [studentID, setStudentID] = React.useState('');
    const [task, setTask] = React.useState('');
    const modalID = "#" + user.id.toString();

    const handleSubmit = (evt) => {
      evt.preventDefault();
      if (studentID) user.studentID=studentID;
      if (task) user.task=task;
      handleEdit(user);
      window.$(modalID).modal('hide');
    }
    const [idChecker,onCheck] = InputText();
    return (
      <div>
        <button type="button" className="button muted-button" data-toggle="modal" data-target={modalID} data-whatever="@mdo">編集</button>        
        <div className="modal fade" id={user.id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">メンバー「<b style={{color: "blue"}}>{user.name}</b>」を編集</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">学籍番号:</label>
                    <input type="text" className="form-control" placeholder={user.studentID} id="recipient-name" value={studentID} onChange={e => setStudentID(e.target.value)}
                    onFocus={onCheck(studentID)} />
                    <p class = {onCheck(studentID)}>Duplicate Id</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">タスク:</label>
                    <textarea className="form-control" placeholder={user.task} id="message-text" value={task} onChange={e => setTask(e.target.value)}/>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">閉じる</button>
                    <button type="submit" value='Submit' className="btn btn-primary">保存</button>
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


