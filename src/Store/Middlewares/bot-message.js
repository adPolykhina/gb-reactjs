import { ADD_MESSAGE } from '../Messages/types'
import { addMessage } from '../Messages'

export const botMessage = (store) => (next) => (action) => {
    if (
        action.type === ADD_MESSAGE &&
        action.payload.message['author'] !== 'robot'
    ) {
        const userFistName = store.getState()['profile']['firstName']
        setTimeout(() => {
            store.dispatch(
                addMessage(
                    { author: 'robot', message: 'Hello, ' + userFistName },
                    action.payload.chatId
                )
            )
        }, 1500)
    }
    return next(action)
}
