import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import { Grid, TextField, FormGroup, Divider } from '@mui/material';
import Button from '@mui/material/Button';

import { Message } from '../../Data/Message';
import MessageView from '../Message/messageView';

import "./list.css";
import "./container.css";
import "./form.css";

function App() {
    // App states
    const [ messages, setMessages ] = useState([]);
    const [newMessage, setNewMessage ] = useState("");
    const [ author, setAuthor ] = useState("");

    // effect for recieving a message from robot
    useEffect(
        () => {
            if (messages.length){
                const lastAutor = messages[messages.length - 1].author;
                if (lastAutor !== "robot")
                    setTimeout(() => setMessages([...messages, new Message("Hello " + lastAutor, "robot")]), 1500);
            }
        },
     [messages]
     );

    // functions for change states 
    const changeMessage = (event) => { setNewMessage(event.target.value) };
    const changeAuthor = (event) => { setAuthor(event.target.value) };
    const sendNewMessage = () => { 
        if (newMessage.trim() && author.trim()){
            setMessages([...messages, new Message(newMessage, author)]);
            setNewMessage("");
        }
        else 
            alert("Message or author cannot be empty!");
    };

    return(
        <Grid container className="Container" spacing={1} justifyContent="center" display="flex">
            <Grid item xs={12} md={6} textAlign="center">
                <h1>Messanger</h1>
            </Grid>
            <Grid item xs={12} justifyContent="center" display="flex">
                {messages.length ?
                <List className="List">
                    {messages.map((message, index) => {
                        if (index !== messages.length - 1) {
                            return (<><MessageView textMessage={message.text} author={message.author}/>
                                <Divider variant="middle" component="li" /></>)
                        }
                        else {
                            return <MessageView textMessage={message.text} author={message.author}/>
                        }
                
                    }
                    )}
                </List> : undefined
                }
            </Grid>
            <Grid item xs={12} md={8} justifyContent="center" display="flex">
                <FormGroup row={true}>
                    <TextField id="nameFiled" value={author} onChange={changeAuthor} placeholder="Your name"></TextField>
                    <TextField id="tmessageField" value={newMessage} onChange={changeMessage} placeholder="Your message"></TextField>
                    <Button variant="contained" onClick={sendNewMessage} className="send-button">Send</Button>
                </FormGroup>
            </Grid>
        </Grid>
    )
}

export default App;