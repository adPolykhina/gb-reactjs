import {
    Grid,
    Typography,
    Button,
    Box,
    TextField,
    ButtonGroup,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { updateProfile, toggleProfileStatus } from '../../Store/Profile'
import { profileSelector } from '../../Store/Profile'

import 'react-datepicker/dist/react-datepicker.css'

export function ProfileEditor({ changeEditMode, styles }) {
    const { firstName, lastName, birthday, status, profession } =
        useSelector(profileSelector)

    const [form, setForm] = useState({
        firstName,
        lastName,
        birthday,
        profession,
        status,
    })

    const dispatch = useDispatch()

    const changeFormData = (e) => {
        const field = e.target.getAttribute('data-name')
        setForm({
            ...form,
            [field]: e.target.value,
        })
    }

    return (
        <Box className={styles.Box}>
            <Grid container>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">First name:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
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
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">Second name:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
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
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">Profession:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
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
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <Typography variant="h5">Birthday:</Typography>
                </Grid>
                <Grid item xs={6} className={styles.ProfileField}>
                    <DatePicker
                        selected={new Date(form.birthday)}
                        onChange={(date) => {
                            setForm({
                                ...form,
                                birthday: new Date(date),
                            })
                        }}
                    />
                </Grid>
                <Grid item xs={12} className={styles.EditProfileButton}>
                    <ButtonGroup>
                        <Button
                            color="inherit"
                            onClick={() => dispatch(toggleProfileStatus())}
                        >
                            Change status
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => dispatch(updateProfile(form))}
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
                </Grid>
            </Grid>
        </Box>
    )
}
