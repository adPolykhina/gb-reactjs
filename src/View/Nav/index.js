import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'

export function NavBar() {
    const styles = useStyles()

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar className={styles.NavBar}>
                <Typography variant="h4">Messanger</Typography>
                <div className={styles.Menu}>
                    <Link to="/" className={styles.MenuItem}>
                        Home
                    </Link>
                    <Link to="/profile" className={styles.MenuItem}>
                        Profile
                    </Link>
                    <Link to="/chess" className={styles.MenuItem}>
                        Chess players
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}
