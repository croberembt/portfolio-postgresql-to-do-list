import React from 'react';
import { Button } from 'reactstrap'; 


const EditComponent = () => {
  return (
    <React.Fragment>
      <Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}} data-toggle='modal' data-target='#editModal'>
          Edit
      </Button>
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div style={{backgroundColor: 'black'}} class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit To Do</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span style={{color: 'white'}} aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              New Input Goes Here
            </div>
            <div class="modal-footer">
              <button style={{fontWeight: 'bold'}} type="button" class="btn btn-secondary" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditComponent; 