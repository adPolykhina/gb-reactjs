export const logger = (store) => (next) => (action) => {
    console.log('Action: ', action.type)
    action.payload && console.log('Action payload: ', action.payload)
    return next(action)
}
