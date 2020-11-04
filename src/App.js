import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to the databaseand fetch new todos as they get added/removed
  // this code will be fired when the first time app.js loads

  useEffect(() => {
    //Snapshot here means we are attaching Listener to our firebase
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })

  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the butoon
    event.preventDefault(); //will stop the refresh
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // clear input after hitting enter
  }

  return (
    <div className="App">
      
      <h1>Yola Yash here!!!</h1>
      
      <form>
        <FormControl>
          <InputLabel>⏳ Write a Todo </InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      {/* <button  >Add Todo</button>  */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo = {todo} />
        ))}
      </ul>

    </div>
  );
}

export default App;
