import { Grid, List, Divider, TextField, Fab } from '@mui/material'
import { Send } from '@mui/icons-material'
import { useState, useEffect, useRef } from 'react'
import { MessageView } from './Message'
import { useStyles } from './styles'

export function ChatView() {
    const styles = useStyles()
    const ref = useRef(null)
    // chat states
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    // effect for recieving a message from robot
    useEffect(() => {
        let timerId = null
        if (messages.length) {
            let lastAutor = messages[messages.length - 1]['author']
            if (lastAutor !== 'robot') {
                timerId = setTimeout(
                    () =>
                        setMessages([
                            ...messages,
                            {
                                author: 'robot',
                                message: 'Hello ' + lastAutor,
                                id: messages.length,
                            },
                        ]),
                    1500
                )
            }
        }
        return () => clearInterval(timerId)
    }, [messages])

    // effect for auto focus on message field
    useEffect(() => {
        ref.current?.focus()
    }, [messages])

    // functions for change states
    const changeMessage = (event) => {
        setNewMessage(event.target.value)
    }
    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                {
                    author: 'Anastasia',
                    message: newMessage,
                    id: messages.length,
                },
            ])
            setNewMessage('')
        } else alert('Message cannot be empty!')
    }

    return (
        <>
            <List className={styles.MessageList}>
                {messages.map((message) => (
                    <MessageView
                        textMessage={message['message']}
                        author={message['author']}
                        key={message['id']}
                    />
                ))}
            </List>
            <Divider className={styles.Divider} />
            <Grid container className={styles.SendMessageArea}>
                <Grid item xs={11}>
                    <TextField
                        className={styles.MessageField}
                        inputRef={ref}
                        variant="standard"
                        value={newMessage}
                        onChange={changeMessage}
                        label="Message input ..."
                        fullWidth
                    />
                </Grid>
                <Grid item xs={1} align="right">
                    <Fab color="default" onClick={sendMessage}>
                        <Send />
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}
