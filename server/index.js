const express = require('express');
const app = express();
const cors = require('cors'); 
const pool = require('./db'); 

// middleware
app.use(cors()); 
app.use(express.json()); 

// ROUTES

// create

app.post('/todo', async(req, res) => {
  try {
    const { description } = req.body; 
    const newToDo = await pool.query(
      'INSERT INTO todo(description) VALUES($1)', 
      [description]
    );
    res.json(newToDo); 
    console.log(req.body); 
  } catch (err) {
    console.error(err.message); 
  }
})

// get all

// get one

// update one

// delete one 

app.listen(5000, () => {
  console.log('server is listening on port 5000');
}); 