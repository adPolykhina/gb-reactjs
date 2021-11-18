import { ListItem, ListItemText, Grid } from '@mui/material'
import { useStyles } from './styles'

export function MessageView({ textMessage, author }) {
    // styles for component
    const alignMessage = author === 'robot' ? 'start' : 'end'
    const styles = useStyles({ alignMessage: alignMessage })

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={12}>
                    <ListItemText
                        className={styles.Message}
                        primary={author}
                    ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText
                        className={styles.Message}
                        secondary={textMessage}
                    ></ListItemText>
                </Grid>
            </Grid>
        </ListItem>
    )
}
