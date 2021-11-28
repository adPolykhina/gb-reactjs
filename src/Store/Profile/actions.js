import { TOGGLE_PROFILE_STATUS, UPDATE_PROFILE } from './types'

export const updateProfile = (profile) => {
    return { type: UPDATE_PROFILE, payload: profile }
}

export const toggleProfileStatus = () => {
    return { type: TOGGLE_PROFILE_STATUS }
}
