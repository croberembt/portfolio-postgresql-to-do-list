import React, { useState } from 'react';
import { Button, Input } from 'reactstrap'; 


const EditComponent = ({ item }) => {
  const [description, setDescription] = useState(item.description); 
  return (
    <React.Fragment>
      <Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}} data-toggle='modal' data-target='#editModal'>
          Edit
      </Button>
      <div className='modal fade' id='editModal' tabindex='-1' aria-labelledby='editModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div style={{backgroundColor: '#1F1E1A'}} className='modal-content'>
            <div className='text-center'>
              <div className='modal-header'>
                <div>Edit Your Task Below</div>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span style={{color: 'white'}} aria-hidden='true'>&times;</span>
                </button>
              </div>
            </div>
            <div className='modal-body'>
              <Input type='text' style={{fontWeight: 'bold', color: '#1F1E1A'}} value={description}
              /> 
            </div>
            <div className='modal-footer'>
              <Button style={{fontWeight: 'bold'}} color='success' data-dismiss='modal'>
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