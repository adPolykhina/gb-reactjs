import { request } from './request'

export const getChessPlayerInfoApi = (userName = '') =>
    request.get(`/pub/player/${userName}`)
