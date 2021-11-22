import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    Message: {
        textAlign: ({ alignMessage }) => alignMessage,
    },
})
