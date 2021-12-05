import { ADD_MESSAGE } from './types'
import { DELETE_CHAT } from '../types'
import { v4 } from 'uuid'

const INITIAL_STATE = {
    messages: {},
}

export const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...(state.messages[action.payload.chatId] ?? []),
                        { ...action.payload.message, id: v4() },
                    ],
                },
            }
        }
        case DELETE_CHAT: {
            delete state.messages[action.payload]
            return {
                ...state,
            }
        }
        default:
            return state
    }
}
