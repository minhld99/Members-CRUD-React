import './../styles/table.css';
import React from 'react'
import UserTable from './UserTable'


function EditUser( { user } ) {
    const [email, setEmail] = React.useState('');
    const [phone,setPhone] = React.useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(user,email,phone);
        user.email=email;
        user.phone=phone;
        console.log('done',user);
    }

    return (
        <div>
            <button type="button" className="button muted-button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button>        
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                    <input type="text" className="form-control" id="recipient-name" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Phone Number:</label>
                    <textarea className="form-control" id="message-text" value={phone} onChange={e => setPhone(e.target.value)}/>
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


