import { createStore, combineReducers } from 'redux'
import { profileReducer } from './Profile'

export const store = createStore(combineReducers({ profile: profileReducer }))
