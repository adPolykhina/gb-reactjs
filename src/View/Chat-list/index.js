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

export function ChatListView({ chats, addNewChat, deleteChat }) {
    // styles
    const styles = useStyles()
    // new chat
    const [newChat, setNewChat] = useState()

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
                                    onClick={() => addNewChat(newChat)}
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
                        <CloseIcon onClick={() => deleteChat(chat.id)} />
                    </ListItemIcon>
                </ListItem>
            ))}
        </List>
    )
}
