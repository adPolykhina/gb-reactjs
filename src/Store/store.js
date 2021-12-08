import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { profileReducer } from './Profile'
import { chatsReducer } from './Chats'
import { messagesReducer } from './Messages'
import { chessReducer } from './Chess'
import thunk from 'redux-thunk'
import { getChessPlayerInfoApi } from '../api/chess'
import { botMessage, logger, crashReporter } from './Middlewares'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    chess: chessReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(
            logger,
            crashReporter,
            botMessage,
            thunk.withExtraArgument({ getChessPlayerInfoApi })
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args
    )
)

export const persistor = persistStore(store)
