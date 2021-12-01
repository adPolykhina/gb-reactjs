import { ADD_CHAT } from './types'
import { DELETE_CHAT } from '../types'
import { v4 } from 'uuid'

const INITIAL_STATE = {
    chats: [
        { name: 'Classmates', id: v4() },
        { name: 'Work chat', id: v4() },
        { name: 'Family', id: v4() },
    ],
}

export const chatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                chats: [...state.chats, { ...action.payload, id: v4() }],
            }
        }
        case DELETE_CHAT: {
            const filteredChats = state.chats.filter(
                (chat) => chat.id !== action.payload
            )
            return {
                chats: filteredChats,
            }
        }
        default:
            return state
    }
}
