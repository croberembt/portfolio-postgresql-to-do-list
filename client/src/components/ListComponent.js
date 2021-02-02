import React, { useEffect, useState} from 'react'; 
import { Table, Button } from 'reactstrap'; 

const ListComponent = () => {

  const [todos, setTodos] = useState([]); 

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todolist');
      const jsonData = await response.json(); 
      setTodos(jsonData); 
    } catch (err) {
      console.error(err.message); 
    }
  }

  useEffect(() => {
    getTodos(); 
  }, []); 

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch (`http://localhost:500/todolist/${id}`, {
        method: 'DELETE'
      }); 
    } catch (err) {
      console.error(err); 
    }
  }

  const date = new Date().toLocaleString('en-us', {  weekday: 'long' });

  return (
    <div className='container text-center' style={{paddingTop: '4rem'}}>
      <Table bordered responsive style={{color: 'white', fontSize: '1.5rem'}}>
        <thead>
          <tr>
            <th>{date}</th>
            <th>Edit</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(item => (
            <tr key={item.todo_id}>
              <td>{item.description}</td>
              <td>
                <Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}
                 
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button color='success' style={{fontWeight: 'bold', color: '#1F1E1A'}}
                  onClick={() => deleteTodo(item.todo_id)}
                >
                  Completed
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListComponent;