import { createStore, combineReducers } from 'redux'
import { profileReducer } from './Profile'
import { chatsReducer } from './Chats'
import { messagesReducer } from './Messages'

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
    })
)
