const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require('./db'); 
const path = require('path'); 
const PORT = process.env.PORT || 5000; 

//process.env.PORT

// middleware

app.use(cors()); 
app.use(express.json()); 


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// ROUTES

// create

app.post('/todolist', async (req, res) => {
  try {
    const { description } = req.body; 
    const newToDo = await pool.query(
      'INSERT INTO todo(description) VALUES($1) RETURNING *', 
      [description]
    );
    res.json(newToDo.rows[0]); 
    console.log(req.body); 
  } catch (err) {
    console.error(err.message); 
  }
}); 

// get all

app.get('/todolist', async (req, res) => {
  try {
    const allToDos = await pool.query(
      'SELECT * FROM todo'
    )
    res.json(allToDos.rows); 
  } catch (err) {
    console.error(err.message); 
  }
}); 

// get one

app.get('/todolist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await pool.query(
      'SELECT * FROM todo WHERE todo_id = $1', 
      [id]
    );
    res.json(toDo.rows[0]); 
  } catch (err) {
    console.error(err.message); 
  }
}); 

// update one

app.put('/todolist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body; 
    const updateToDo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2',
      [description, id] 
    );
    res.json(`updated ${id} to ${description}`); 
  } catch (err) {
    console.error(err.message); 
  }
}); 

// delete one 

app.delete('/todolist/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDo = await pool.query(
      'DELETE FROM todo WHERE todo_id = $1',
      [id]
    );
    res.json(`deleted ${id} successfully`)
  } catch (err) {
    console.error(err.message); 
  }
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
}); 