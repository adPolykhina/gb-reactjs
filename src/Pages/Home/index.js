import { Grid } from '@mui/material'
import { useStyles } from './styles'
import { ChatView, ChatList } from '../../View'
import { Routes, Route } from 'react-router'
import { useState } from 'react'

export function Home() {
    const styles = useStyles()
    const [chats, setChats] = useState([
        { name: 'Classmates', id: 0 },
        { name: 'Work chat', id: 1 },
        { name: 'Family', id: 2 },
    ])

    return (
        <>
            <Grid container>
                <Grid item xs={4} className={styles.ChatList}>
                    <ChatList chats={chats} setChats={setChats} />
                </Grid>
                <Grid item xs={8} className={styles.Chat}>
                    <Routes>
                        <Route path="/chat/:chatId" element={<ChatView />} />
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
