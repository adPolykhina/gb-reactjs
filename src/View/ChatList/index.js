import {
    List,
    ListItemText,
    ListItem,
    TextField,
    ListItemIcon,
    InputAdornment,
    IconButton,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector, useDispatch } from 'react-redux'
import { addChat, deleteChat } from '../../Store/Chats'
import { chatsSelector } from '../../Store/Chats'

export function ChatList() {
    // styles
    const styles = useStyles()
    // chats list
    const { chats } = useSelector(chatsSelector)
    const dispatch = useDispatch()
    // new chat
    const [newChat, setNewChat] = useState()

    // add new chat
    const addNewChat = () => {
        if (newChat.trim()) {
            dispatch(addChat({ name: newChat }))
            setNewChat('')
        }
    }

    return (
        <List>
            <ListItem key={'AddNewChatKey'}>
                <TextField
                    placeholder="chat name..."
                    className={styles.ChatName}
                    value={newChat}
                    onChange={(event) => setNewChat(event.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    color="primary"
                                    onClick={addNewChat}
                                >
                                    <AddIcon className={styles.AddButton} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </ListItem>
            {chats.map((chat) => (
                <ListItem key={chat.id} className={styles.ListItem}>
                    <Link to={`/chat/${chat.id}`} className={styles.Link}>
                        <ListItemText primary={chat.name} />
                    </Link>
                    <ListItemIcon className={styles.ListItemIcon}>
                        <CloseIcon
                            onClick={() => dispatch(deleteChat(chat.id))}
                        />
                    </ListItemIcon>
                </ListItem>
            ))}
        </List>
    )
}
