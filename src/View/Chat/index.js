import { Grid, List, Divider, TextField, Fab } from '@mui/material'
import { Send } from '@mui/icons-material'
import { useState, useEffect, useRef, useCallback } from 'react'
import { MessageView } from './Message'
import { useStyles } from './styles'
import { useParams } from 'react-router-dom'

export function ChatView() {
    // styles
    const styles = useStyles()
    const ref = useRef(null)
    // current chat id
    const { chatId } = useParams()
    // state for all messages
    const [messages, setMessages] = useState({})
    // state for newMessage
    const [newMessage, setNewMessage] = useState('')

    // effect for recieving a message from robot
    useEffect(() => {
        const chatMessages = messages[chatId] ?? []
        let timerId = null
        if (chatMessages.length) {
            let lastAutor = chatMessages[chatMessages.length - 1]['author']
            if (lastAutor !== 'robot') {
                timerId = setTimeout(
                    () =>
                        setMessages({
                            ...messages,
                            [chatId]: [
                                ...chatMessages,
                                {
                                    author: 'robot',
                                    message: 'Hello ' + lastAutor,
                                    id: chatMessages.length,
                                },
                            ],
                        }),
                    1500
                )
            }
        }
        return () => clearInterval(timerId)
    }, [messages, chatId])

    // effect for auto focus on message field
    useEffect(() => {
        ref.current?.focus()
    }, [messages])

    // functions for change states
    const changeMessage = (event) => {
        setNewMessage(event.target.value)
    }

    const sendMessage = useCallback(() => {
        if (newMessage.trim()) {
            setMessages({
                ...messages,
                [chatId]: [
                    ...(messages[chatId] ?? []),
                    {
                        author: 'Anastasia',
                        message: newMessage,
                        id: messages[chatId] ? messages[chatId].length : 0,
                    },
                ],
            })
            setNewMessage('')
        } else alert('Message cannot be empty!')
    }, [messages, chatId, newMessage])

    const chatMessages = messages[chatId] ?? []

    return (
        <>
            <List className={styles.MessageList}>
                {chatMessages.map((message) => (
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
