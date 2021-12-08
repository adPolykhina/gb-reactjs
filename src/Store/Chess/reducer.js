import {
    GET_CHESS_PLAYER_INFO_START,
    GET_CHESS_PLAYER_INFO_SUCCESS,
    GET_CHESS_PLAYER_INFO_ERROR,
} from './types'

const initialState = {
    playerInfo: null,
    playerInfoLoading: false,
    playerInfoError: null,
}

export const chessReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHESS_PLAYER_INFO_START:
            return {
                ...state,
                playerInfoLoading: true,
                playerInfoError: null,
            }
        case GET_CHESS_PLAYER_INFO_SUCCESS:
            return {
                ...state,
                playerInfoLoading: false,
                playerInfo: action.payload,
            }

        case GET_CHESS_PLAYER_INFO_ERROR:
            return {
                ...state,
                playerInfoLoading: false,
                playerInfoError: action.payload,
                playerInfo: null,
            }
        default:
            return state
    }
}
