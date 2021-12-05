export const crashReporter = (store) => (next) => (action) => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception: ', err)
        console.error('Action: ', action)
        console.error('Store state: ', store.getState())
    }
}
