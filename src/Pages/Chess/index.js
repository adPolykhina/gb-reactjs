import { Grid, TextField, Typography, Button } from '@mui/material'
import { useState } from 'react'
import { useStyles } from '../Chess/styles'
import { getChessPlayerInfo, chessSelector } from '../../Store/Chess'
import { useDispatch, useSelector } from 'react-redux'

export function ChessPage() {
    const styles = useStyles()
    const [value, setValue] = useState()

    const { playerInfo, playerInfoLoading, playerInfoError } =
        useSelector(chessSelector)

    const dispatch = useDispatch()

    const getPlayerInfo = () => {
        dispatch(getChessPlayerInfo(value))
    }

    const renderHelper = () => {
        if (playerInfoLoading) {
            return <div>Player info loading</div>
        } else if (playerInfoError) {
            return (
                <div>Get player info error: {playerInfoError['message']}</div>
            )
        } else if (playerInfo) {
            return (
                <div>
                    Player info:{' '}
                    {Object.keys(playerInfo).map((infoKey, index) => (
                        <p key={index}>
                            {infoKey}: {playerInfo[infoKey]}
                        </p>
                    ))}
                </div>
            )
        }
    }

    return (
        <Grid container>
            <Grid item xs={12} className={styles.Header}>
                <Typography variant="h2">Chess players</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    placeholder="user name..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.UserNameInput}
                />
                <Button onClick={getPlayerInfo}>Search</Button>
            </Grid>
            <Grid item xs={9}>
                {renderHelper()}
            </Grid>
        </Grid>
    )
}
