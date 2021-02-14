import React, { useState } from 'react'; 
import { Form, Input, Button } from 'reactstrap'; 

const InputComponent = () => {

  const [description, setDescription] = useState(''); 

  const onSubmitForm = async event => {
    event.preventDefault(); 
    try {
      const body = { description }; 
      await fetch('/todolist', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body)
      }); 
      window.location = '/'; 
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className='container'>
      <h2 className='text-center' style={{color: 'white'}}>To Do List</h2>
      <Form className='d-flex' style={{marginTop: '1rem'}} onSubmit={onSubmitForm}>
            <Input type='text' style={{fontWeight: 'bold', color: '#1F1E1A'}} value={description} placeholder='Add your task here...'
              onChange={event => setDescription(event.target.value)}
              /> 
            <Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Add</Button>
      </Form>
    </div>
  )
}

export default InputComponent; 