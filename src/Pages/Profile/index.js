import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { profileSelector } from '../../Store/Profile'
import { ProfileView } from '../../View'
import { ProfileEditor } from '../../Containers'

export function ProfilePage() {
    const [editMode, setEditMode] = useState(false)
    const { firstName, lastName, birthday, status, profession } =
        useSelector(profileSelector)

    const styles = useStyles({
        color: status === 'online' ? 'DarkGreen' : 'DarkRed',
    })

    // edit mode -> false if store profile state changed
    useEffect(
        () => setEditMode(false),
        [firstName, lastName, birthday, status, profession]
    )

    // current profile mode
    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <Grid container>
            <Grid item xs={12} className={styles.Header}>
                <Typography variant="h2">Profile page</Typography>
            </Grid>
            <Grid item xs={12} className={styles.ProfileData}>
                {editMode ? (
                    <ProfileEditor
                        changeEditMode={changeEditMode}
                        styles={styles}
                    />
                ) : (
                    <ProfileView
                        firstName={firstName}
                        lastName={lastName}
                        birthday={birthday}
                        status={status}
                        profession={profession}
                        changeEditMode={changeEditMode}
                        styles={styles}
                    />
                )}
            </Grid>
        </Grid>
    )
}
