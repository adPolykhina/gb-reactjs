import { ADD_MESSAGE } from './types'

export function addMessage(newMessage, chatId) {
    return {
        type: ADD_MESSAGE,
        payload: {
            message: newMessage,
            chatId: chatId,
        },
    }
}
