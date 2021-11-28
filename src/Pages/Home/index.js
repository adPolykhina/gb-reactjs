import { Grid } from '@mui/material'
import { useStyles } from './styles'
import { ChatView, ChatList } from '../../View'
import { Routes, Route } from 'react-router'

export function Home() {
    const styles = useStyles()

    return (
        <>
            <Grid container>
                <Grid item xs={4} className={styles.ChatList}>
                    <ChatList />
                </Grid>
                <Grid item xs={8} className={styles.Chat}>
                    <Routes>
                        <Route path="/chat/:chatId" element={<ChatView />} />
                        <Route path="/*" element={<div>Выберите чат</div>} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    )
}
