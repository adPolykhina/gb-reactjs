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

export function ChatList({ chats, setChats }) {
    const styles = useStyles()
    const [newChat, setNewChat] = useState()

    console.log(chats)

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
                    <ListItem key={'item' + chat.id}>
                        <Link to={`/chat/${chat.id}`} className={styles.Link}>
                            <ListItemText primary={chat.name} />
                        </Link>
                        <ListItemIcon>
                            <CloseIcon onClick={() => deleteChat(chat.name)} />
                        </ListItemIcon>
                    </ListItem>
                    {chats.length - 1 !== index && (
                        <Divider
                            key={'divider' + chat.id}
                            className={styles.Divider}
                        />
                    )}
                </>
            ))}
        </List>
    )
}
