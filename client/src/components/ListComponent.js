import React from 'react'; 
import { Table, Button } from 'reactstrap'; 

const ListComponent = () => {

  const date = new Date().toLocaleString('en-us', {  weekday: 'long' });

  return (
    <div className='container text-center' style={{paddingTop: '4rem'}}>
      <Table borderless responsive style={{color: 'white', fontSize: '1.5rem'}}>
        <thead>
          <tr>
            <th>{date}</th>
            <th>Edit</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Make the bed and do the dishes and hang the towels up to dry and maybe do some other stuff so this is very long</td>
            <td><Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Edit</Button></td>
            <td><Button color='success' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Completed</Button></td>
          </tr>
          <tr>
            <td>Do the dishes</td>
            <td><Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Edit</Button></td>
            <td><Button color='success' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Completed</Button></td>
          </tr>
          <tr>
            <td>Do the dishes</td>
            <td><Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Edit</Button></td>
            <td><Button color='success' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Completed</Button></td>
          </tr>
          <tr>
            <td>Do the dishes</td>
            <td><Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Edit</Button></td>
            <td><Button color='success' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Completed</Button></td>
          </tr>
          <tr>
            <td>Do the dishes</td>
            <td><Button color='warning' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Edit</Button></td>
            <td><Button color='success' style={{fontWeight: 'bold', color: '#1F1E1A'}}>Completed</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ListComponent;