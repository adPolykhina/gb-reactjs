import {
    getChessPlayerStart,
    getChessPlayerSuccess,
    getChessPlayerError,
} from './actions'

export const getChessPlayerInfo =
    (userName = '') =>
    async (dispatch, _, api) => {
        try {
            dispatch(getChessPlayerStart())

            const { data } = await api.getChessPlayerInfoApi(userName)

            dispatch(getChessPlayerSuccess(data))
        } catch (e) {
            dispatch(getChessPlayerError(e))
        }
    }
