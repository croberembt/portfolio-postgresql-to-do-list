import React, { useState } from 'react';
import { Button, Input } from 'reactstrap'; 


const EditComponent = ({ item }) => {
  
  const [description, setDescription] = useState(item.description); 

  const editTodo = async (event) => {
    event.preventDefault(); 
    try {
      const body = { description };
      await fetch(`/todolist/${item.todo_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      window.location = '/'; 
    } catch (err) {
      console.error(err); 
    }
  }

  return (
    <React.Fragment>
      <Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}} data-toggle='modal' data-target={`#id${item.todo_id}`}>
          Edit
      </Button>
      <div className='modal fade' id={`id${item.todo_id}`} tabIndex='-1' aria-labelledby='editModalLabel' aria-hidden='true' onClick={() => setDescription(item.description)}>
        <div className='modal-dialog'>
          <div style={{backgroundColor: '#1F1E1A'}} className='modal-content'>
            <div className='text-center'>
              <div className='modal-header'>
                <div>Edit Your Task Below</div>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={() => setDescription(item.description)}>
                  <span style={{color: 'white'}} aria-hidden='true'>&times;</span>
                </button>
              </div>
            </div>
            <div className='modal-body'>
                <Input type='text' style={{fontWeight: 'bold', color: '#1F1E1A'}} value={description}
                onChange={event => setDescription(event.target.value)}
                /> 
            </div>
            <div className='modal-footer'>
              <Button style={{fontWeight: 'bold', color: '#1F1E1A'}} color='success' data-dismiss='modal'
                onClick={(event) => editTodo(event)}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditComponent; 