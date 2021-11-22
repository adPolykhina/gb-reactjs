import {
    Grid,
    Typography,
    List,
    ListItem,
    Divider,
    ListItemText,
} from '@mui/material'

import { ChatView } from './View'
import { useStyles } from './styles'

export function AppView() {
    const styles = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} className={styles.Header}>
                <Typography variant="h4">Messanger</Typography>
            </Grid>
            <Grid item xs={4} className={styles.ChatList}>
                <Typography variant="h5">Chats</Typography>
                <List>
                    <ListItem button>
                        <ListItemText primary="Classmates"></ListItemText>
                    </ListItem>
                    <Divider className={styles.Divider} />
                    <ListItem button>
                        <ListItemText primary="Work chat"></ListItemText>
                    </ListItem>
                    <Divider className={styles.Divider} />
                    <ListItem button>
                        <ListItemText primary="Family"></ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={8} className={styles.Chat}>
                <ChatView />
            </Grid>
        </Grid>
    )
}
