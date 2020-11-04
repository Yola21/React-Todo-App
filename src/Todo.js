import { Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
           todo: input 
        }, { merge: true });
        setOpen(false);
    }
    
    return (
        <>
            <Modal open = { open } onClose={ e => setOpen(false) }>
                <div className={ classes.paper }>
                    <h1>Modal</h1>
                    <input value={ input } onChange={event => setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>

            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="TodoItem..." />
                </ListItem>
                <Button onClick={ e => setOpen(true) }> Edit </Button>
                <Button onClick={ event => db.collection('todos').doc(props.todo.id).delete() }> Delete </Button>
            </List>
        </>
    )
}

export default Todo
