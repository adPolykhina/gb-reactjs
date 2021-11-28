import { makeStyles } from '@mui/styles'
import { height } from '@mui/system'

export const useStyles = makeStyles((ctx) => ({
    Divider: {
        backgroundColor: ctx.pallete.buttons.main,
    },

    Link: {
        color: ctx.pallete.text.main,
        textDecoration: 'none',
    },

    Button: {
        color: ctx.pallete.text.main + ' !important',
        width: '20vh',
        borderColor: ctx.pallete.text.main,
    },

    ChatName: {
        color: ctx.pallete.text.main,
        width: '40vh',
        maxWidth: '40vh',
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
            '&:hover fieldset': {
                borderColor: ctx.pallete.buttons.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: ctx.pallete.buttons.main,
            },
        },
    },
}))
