import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((ctx) => ({
    Divider: {
        backgroundColor: ctx.pallete.buttons.main,
    },

    Link: {
        color: ctx.pallete.text.main,
        textDecoration: 'none',
        width: '90%',
    },

    Button: {
        color: ctx.pallete.text.main + ' !important',
        width: '20vh',
        borderColor: ctx.pallete.text.main,
    },

    ChatName: {
        width: '100%',
        '& label.Mui-focused': {
            color: ctx.pallete.text.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: ctx.pallete.buttons.main,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: ctx.pallete.buttons.main,
            },
            '& :hover fieldset': {
                borderColor: ctx.pallete.buttons.main,
            },
            '& .Mui-focused fieldset': {
                borderColor: ctx.pallete.buttons.main,
            },
            '& .MuiOutlinedInput-input': {
                color: ctx.pallete.text.main,
            },
        },
    },

    AddButton: {
        color: ctx.pallete.text.main,
    },

    ListItem: {
        borderBottomColor: ctx.pallete.text.main,
        borderBottom: 'solid',
        borderBottomWidth: '1px',
    },

    ListItemIcon: {
        justifyContent: 'flex-end',
        '& .MuiSvgIcon-root': {
            color: ctx.pallete.text.main,
        },
        '& .MuiSvgIcon-root:hover': {
            cursor: 'pointer',
        },
    },
}))
