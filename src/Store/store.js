import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { profileReducer } from './Profile'
import { chatsReducer } from './Chats'
import { messagesReducer } from './Messages'
import thunk from 'redux-thunk'
import { botMessage, logger, crashReporter } from './Middlewares'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(logger, crashReporter, botMessage, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args
    )
)

export const persistor = persistStore(store)
