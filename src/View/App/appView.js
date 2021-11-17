import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import { Grid, TextField, FormGroup, Divider } from '@mui/material';
import Button from '@mui/material/Button';

import MessageView from '../Message/messageView';

import "./list.css";
import "./container.css";
import "./form.css";

function App() {
    // App states
    const [ messages, setMessages ] = useState([]);
    const [newMessage, setNewMessage ] = useState("");

    // effect for recieving a message from robot
    useEffect(
        () => {
            if (messages.length){
                const lastAutor = messages[messages.length - 1]['author'];
                if (lastAutor !== "robot")
                    setTimeout(() => setMessages([...messages, {'author': 'robot', 'message': 'Hello' + lastAutor}]), 1500);
            }
        },
     [messages]
     );

    // functions for change states 
    const changeMessage = (event) => { setNewMessage(event.target.value) };
    const sendNewMessage = () => { 
        if (newMessage.trim()){
            setMessages([...messages, {'author': 'Anastasia', 'message': newMessage}]);
            setNewMessage("");
        }
        else 
            alert("Message cannot be empty!");
    };

    return(
        <Grid container className="Container" spacing={1} justifyContent="center" display="flex">
            <Grid item xs={12} md={6} textAlign="center">
                <h1>Messanger</h1>
            </Grid>
            <Grid item xs={12} justifyContent="center" display="flex">
                {messages.length ?
                <List className="List">
                    {messages.map((message, index) => 
                            <><MessageView textMessage={message['message']} author={message['author']}/>
                            {index !== messages.length - 1 && <Divider variant="middle" component="li" />}</>
                    )}
                </List> : undefined
                }
            </Grid>
            <Grid item xs={12} md={8} justifyContent="center" display="flex">
                <FormGroup row={true}>
                    <TextField id="tmessageField" value={newMessage} onChange={changeMessage} placeholder="Your message"></TextField>
                    <Button variant="contained" onClick={sendNewMessage} className="send-button">Send</Button>
                </FormGroup>
            </Grid>
        </Grid>
    )
}

export default App;