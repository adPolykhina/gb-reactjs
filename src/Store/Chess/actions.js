import {
    GET_CHESS_PLAYER_INFO_START,
    GET_CHESS_PLAYER_INFO_SUCCESS,
    GET_CHESS_PLAYER_INFO_ERROR,
} from './types'

export const getChessPlayerStart = () => ({
    type: GET_CHESS_PLAYER_INFO_START,
})

export const getChessPlayerSuccess = (chessPlayerInfo) => ({
    type: GET_CHESS_PLAYER_INFO_SUCCESS,
    payload: chessPlayerInfo,
})

export const getChessPlayerError = (error) => ({
    type: GET_CHESS_PLAYER_INFO_ERROR,
    payload: error,
})
