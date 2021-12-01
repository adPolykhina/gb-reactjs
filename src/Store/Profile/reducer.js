import { TOGGLE_PROFILE_STATUS, UPDATE_PROFILE } from './types'

const INITIAL_STATE = {
    firstName: 'Anastasia',
    lastName: 'Polukhina',
    age: 24,
    profession: 'Programmer',
    birthday: new Date(1997, 4, 16, 0, 0, 0, 0),
    status: 'offline',
}

export const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_PROFILE: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case TOGGLE_PROFILE_STATUS: {
            return {
                ...state,
                status: state.status === 'offline' ? 'online' : 'offline',
            }
        }
        default:
            return state
    }
}
