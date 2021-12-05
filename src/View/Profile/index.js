import { Grid, Typography, Button, Box } from '@mui/material'

export function ProfileView({
    firstName,
    lastName,
    birthday,
    status,
    profession,
    changeEditMode,
    styles,
}) {
    return (
        <Box className={styles.Box}>
            <Grid container>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">First name:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h6">
                        {firstName}
                        <sup className={styles.Sup}>{status}</sup>
                    </Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">Second name:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h6">{lastName}</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">Profession:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h6">{profession}</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">Birthday:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h6">
                        {new Date(birthday).toDateString()}
                    </Typography>
                </Grid>
                <Grid item xs={12} className={styles.EditProfileButton}>
                    <Button
                        color="inherit"
                        onClick={() => changeEditMode()}
                        variant="outlined"
                    >
                        Edit Profile
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
