import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((ctx) => ({
    MessageList: {
        height: '70vh',
        overflowY: 'auto',
        margin: '3px',
    },
    SendMessageArea: {
        padding: '15px',
        color: ctx.pallete.text.main,
    },
    Divider: {
        backgroundColor: ctx.pallete.buttons.main,
    },
    MessageField: {
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
