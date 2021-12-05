import { Grid, List, Divider, TextField, Fab } from '@mui/material'
import { Send } from '@mui/icons-material'
import { useState, useEffect, useRef, useCallback } from 'react'
import { MessageView } from './Message'
import { useStyles } from './styles'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../../Store/Messages'
import { messagesSelector } from '../../Store/Messages'
import { firstNameSelector } from '../../Store/Profile'

export function Chat() {
    // styles
    const styles = useStyles()
    // current chat id
    const { chatId } = useParams()
    // messages
    const messages = useSelector(messagesSelector(chatId))
    const dispatch = useDispatch()
    // current user
    const { firstName } = useSelector(firstNameSelector)
    // state for newMessage
    const [newMessage, setNewMessage] = useState('')

    const ref = useRef(null)

    // effect for auto focus on message field
    useEffect(() => {
        ref.current?.focus()
    }, [messages])

    // change mew message
    const changeMessage = (event) => {
        setNewMessage(event.target.value)
    }

    // send message
    const sendMessage = useCallback(() => {
        if (newMessage.trim()) {
            dispatch(
                addMessage({ author: firstName, message: newMessage }, chatId)
            )
            setNewMessage('')
        } else alert('Message cannot be empty!')
    }, [newMessage, firstName, dispatch, chatId])

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
