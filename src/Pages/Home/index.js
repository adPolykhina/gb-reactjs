import { Grid } from '@mui/material'
import { useStyles } from './styles'
import { Routes, Route } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { ChatListView } from '../../View'
import { Chat } from '../../Containers'
import { addChat, deleteChat, chatsSelector } from '../../Store/Chats'

export function HomePage() {
    const styles = useStyles()

    // chats list
    const { chats } = useSelector(chatsSelector)
    const dispatch = useDispatch()

    // add new chat
    const addNewChat = (newChat) => {
        if (newChat.trim()) {
            dispatch(addChat({ name: newChat }))
        }
    }

    // delete existing chat
    const deleteExistingChat = (chatId) => {
        dispatch(deleteChat(chatId))
    }

    return (
        <>
            <Grid container>
                <Grid item xs={4} className={styles.ChatList}>
                    <ChatListView
                        chats={chats}
                        addNewChat={addNewChat}
                        deleteChat={deleteExistingChat}
                    />
                </Grid>
                <Grid item xs={8} className={styles.Chat}>
                    <Routes>
                        <Route path="/chat/:chatId" element={<Chat />} />
                        <Route
                            path="/chat/"
                            element={<div>Выберите чат</div>}
                        />
                        <Route path="/" element={<div>Выберите чат</div>} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    )
}
