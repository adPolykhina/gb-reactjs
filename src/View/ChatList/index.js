import {
    List,
    ListItemText,
    Divider,
    ListItem,
    TextField,
    Button,
    ListItemIcon,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'
import CloseIcon from '@mui/icons-material/Close'

export function ChatList() {
    const styles = useStyles()
    const [newChat, setNewChat] = useState()
    const [chats, setChats] = useState([
        { name: 'Classmates', id: 0 },
        { name: 'Work chat', id: 1 },
        { name: 'Family', id: 2 },
    ])

    // add new chat
    const addNewChat = () => {
        if (newChat.trim()) {
            setChats([
                ...chats,
                {
                    name: newChat,
                    id: chats[chats.length - 1].id + 1,
                },
            ])
            setNewChat('')
        }
    }

    //delete chat
    const deleteChat = (name) => {
        let newChats = chats.filter((chat) => chat.name !== name)
        setChats(newChats)
    }

    return (
        <List>
            <ListItem>
                <TextField
                    placeholder="chat name..."
                    className={styles.ChatName}
                    value={newChat}
                    onChange={(event) => setNewChat(event.target.value)}
                />
                <Button className={styles.Button} onClick={addNewChat}>
                    Add chat
                </Button>
            </ListItem>
            {chats.map((chat, index) => (
                <>
                    <ListItem>
                        <Link to={`/chat/${chat.id}`} className={styles.Link}>
                            <ListItemText primary={chat.name} key={chat.id} />
                        </Link>
                        <ListItemIcon>
                            <CloseIcon onClick={() => deleteChat(chat.name)} />
                        </ListItemIcon>
                    </ListItem>
                    {chats.length - 1 !== index && (
                        <Divider className={styles.Divider} />
                    )}
                </>
            ))}
        </List>
    )
}
