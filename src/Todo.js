import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css';

function Todo(props) {
    return (
        <div>
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="TodoItem..." />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
