import {
    Grid,
    Typography,
    Button,
    Box,
    TextField,
    ButtonGroup,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { useStyles } from './styles'
import { updateProfile, toggleProfileStatus } from '../../Store/Profile'
import { profileSelector } from '../../Store/Profile'

import 'react-datepicker/dist/react-datepicker.css'

export function Profile() {
    const [editMode, setEditMode] = useState(false)
    const { firstName, lastName, birthday, status, profession } =
        useSelector(profileSelector)

    const [form, setForm] = useState({
        firstName,
        lastName,
        birthday,
        profession,
        status,
    })

    const styles = useStyles({
        color: status === 'online' ? 'DarkGreen' : 'DarkRed',
    })

    const dispatch = useDispatch()

    useEffect(
        () => setEditMode(false),
        [firstName, lastName, birthday, status, profession]
    )

    // helpful functions
    const changeEditMode = () => {
        setForm({
            firstName,
            lastName,
            birthday,
            profession,
            status,
        })
        setEditMode(!editMode)
    }
    const changeFormData = (e) => {
        const field = e.target.getAttribute('data-name')
        setForm({
            ...form,
            [field]: e.target.value,
        })
    }

    return (
        <Grid container>
            <Grid item xs={12} className={styles.Header}>
                <Typography variant="h2">Profile page</Typography>
            </Grid>
            <Grid item xs={12} className={styles.ProfileData}>
                <Box className={styles.Box}>
                    <Grid container>
                        <Grid item xs={6} className={styles.ProfileField}>
                            <Typography variant="h5">First name:</Typography>
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            {!editMode ? (
                                <Typography variant="h6">
                                    {firstName}
                                    <sup className={styles.Sup}>{status}</sup>
                                </Typography>
                            ) : (
                                <TextField
                                    className={styles.EditProfileField}
                                    value={form.firstName}
                                    onChange={changeFormData}
                                    inputProps={{
                                        'data-name': 'firstName',
                                    }}
                                    label="first name..."
                                    variant="standard"
                                ></TextField>
                            )}
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            <Typography variant="h5">Second name:</Typography>
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            {!editMode ? (
                                <Typography variant="h6">{lastName}</Typography>
                            ) : (
                                <TextField
                                    className={styles.EditProfileField}
                                    value={form.lastName}
                                    onChange={changeFormData}
                                    inputProps={{
                                        'data-name': 'lastName',
                                    }}
                                    label="last name..."
                                    variant="standard"
                                ></TextField>
                            )}
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            <Typography variant="h5">Profession:</Typography>
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            {!editMode ? (
                                <Typography variant="h6">
                                    {profession}
                                </Typography>
                            ) : (
                                <TextField
                                    className={styles.EditProfileField}
                                    value={form.profession}
                                    onChange={changeFormData}
                                    inputProps={{
                                        'data-name': 'profession',
                                    }}
                                    label="profession..."
                                    variant="standard"
                                ></TextField>
                            )}
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            <Typography variant="h5">Birthday:</Typography>
                        </Grid>
                        <Grid item xs={6} className={styles.ProfileField}>
                            {!editMode ? (
                                <Typography variant="h6">
                                    {birthday.toDateString()}
                                </Typography>
                            ) : (
                                <DatePicker
                                    selected={form.birthday}
                                    onChange={(date) =>
                                        setForm({ ...form, birthday: date })
                                    }
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} className={styles.EditProfileButton}>
                            {!editMode ? (
                                <Button
                                    color="inherit"
                                    onClick={() => changeEditMode()}
                                    variant="outlined"
                                >
                                    Edit Profile
                                </Button>
                            ) : (
                                <ButtonGroup>
                                    <Button
                                        color="inherit"
                                        onClick={() =>
                                            dispatch(toggleProfileStatus())
                                        }
                                    >
                                        Change status
                                    </Button>
                                    <Button
                                        color="inherit"
                                        onClick={() =>
                                            dispatch(updateProfile(form))
                                        }
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        color="inherit"
                                        onClick={() => changeEditMode()}
                                    >
                                        Cancel
                                    </Button>
                                </ButtonGroup>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
