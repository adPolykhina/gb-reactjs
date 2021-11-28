import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((ctx) => ({
    NavBar: {
        backgroundColor: '#292f33',
        padding: '2px',
    },
    Menu: {
        marginLeft: '50px',
        display: 'flex',
    },
    MenuItem: {
        color: ctx.pallete.text.main,
        fontSize: '20px',
        marginLeft: '10px',
        padding: '5px',
    },
}))
