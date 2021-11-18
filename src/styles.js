import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((ctx) => ({
    Chat: {
        maxHeight: '85vh',
        height: '85vh',
        margin: '2px',
        backgroundColor: ctx.pallete.primary.main,
    },

    Header: {
        padding: '15px',
        textAlign: 'center',
        color: ctx.pallete.text.main,
    },

    ChatList: {
        color: ctx.pallete.text.main,
    },

    Divider: {
        backgroundColor: ctx.pallete.buttons.main,
    },
}))
