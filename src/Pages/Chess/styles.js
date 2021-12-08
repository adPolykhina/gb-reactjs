import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((ctx) => ({
    Header: {
        justifyContent: 'center',
        display: 'flex',
        padding: '15px',
        color: ctx.pallete.text.main,
    },

    UserNameInput: {
        width: '',
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
}))
