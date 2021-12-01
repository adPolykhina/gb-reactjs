import { ADD_CHAT } from './types'
import { DELETE_CHAT } from '../types'

export function addChat(newChat) {
    return {
        type: ADD_CHAT,
        payload: newChat,
    }
}

export function deleteChat(chatId) {
    return {
        type: DELETE_CHAT,
        payload: chatId,
    }
}
