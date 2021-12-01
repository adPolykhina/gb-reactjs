import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((ctx) => ({
    Header: {
        justifyContent: 'center',
        display: 'flex',
        padding: '15px',
        color: ctx.pallete.text.main,
    },

    ProfileData: {
        justifyContent: 'center',
        display: 'flex',
    },

    ProfileField: {
        padding: '10px',
        display: 'flex',
    },

    Box: {
        backgroundColor: ctx.pallete.primary.main,
        borderRadius: '24px',
        width: '495px',
    },

    Sup: {
        color: (props) => props.color,
    },

    EditProfileButton: {
        padding: '15px',
        justifyContent: 'flex-end',
        display: 'flex',
    },

    EditProfileField: {
        '& label.Mui-focused': {
            color: ctx.pallete.text.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: ctx.pallete.buttons.main,
        },
    },
}))
